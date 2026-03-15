/* ════════════════════════════════════════════════════
   PTE Progress Sync — Cross-Platform localStorage Export/Import
   Include this script + the sync bar HTML in any page.
   ════════════════════════════════════════════════════ */

function toggleSyncBar() {
  var bar = document.getElementById('syncBar');
  if (!bar) return;
  bar.style.display = bar.style.display === 'none' ? 'flex' : 'none';
}

function getAllPteData() {
  var data = {};
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if (key && key.indexOf('pte_') === 0) {
      try {
        data[key] = JSON.parse(localStorage.getItem(key));
      } catch(e) {
        data[key] = localStorage.getItem(key);
      }
    }
  }
  return data;
}

function exportProgress() {
  var data = getAllPteData();
  data._syncTs = Date.now();
  var json = JSON.stringify(data);
  var code = btoa(unescape(encodeURIComponent(json)));
  var input = document.getElementById('syncCode');
  if (!input) return;
  input.value = code;
  input.readOnly = false;
  input.select();
  try { document.execCommand('copy'); } catch(e) {}
  input.readOnly = true;
  showSyncMsg('Copied! Paste on another device.', 'var(--green,#27ae60)');
}

function importProgress() {
  var input = document.getElementById('syncCode');
  if (!input) return;
  input.readOnly = false;
  var code = input.value.trim();
  if (!code) {
    showSyncMsg('Paste a sync code first!', 'var(--red,#c0392b)');
    return;
  }
  try {
    var json = decodeURIComponent(escape(atob(code)));
    var data = JSON.parse(json);
    var count = 0;
    var keys = Object.keys(data);
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      if (k === '_syncTs') continue;
      if (k.indexOf('pte_') === 0) {
        // Merge objects (keep best of local + imported)
        var existing = null;
        try { existing = JSON.parse(localStorage.getItem(k)); } catch(e) {}
        var incoming = data[k];

        if (existing && typeof existing === 'object' && typeof incoming === 'object' && !Array.isArray(existing) && !Array.isArray(incoming)) {
          // Deep merge for object types
          var merged = existing;
          var iKeys = Object.keys(incoming);
          for (var j = 0; j < iKeys.length; j++) {
            var ik = iKeys[j];
            if (typeof incoming[ik] === 'object' && typeof merged[ik] === 'object' && !Array.isArray(incoming[ik])) {
              // Sub-object merge (e.g. verbCorrect, sentenceCorrect)
              var subKeys = Object.keys(incoming[ik]);
              if (!merged[ik]) merged[ik] = {};
              for (var s = 0; s < subKeys.length; s++) {
                merged[ik][subKeys[s]] = incoming[ik][subKeys[s]];
              }
            } else if (typeof incoming[ik] === 'number' && typeof merged[ik] === 'number') {
              merged[ik] = Math.max(merged[ik], incoming[ik]);
            } else {
              merged[ik] = incoming[ik];
            }
          }
          localStorage.setItem(k, JSON.stringify(merged));
        } else {
          localStorage.setItem(k, typeof incoming === 'string' ? incoming : JSON.stringify(incoming));
        }
        count++;
      }
    }
    showSyncMsg('Imported ' + count + ' keys! Refreshing...', 'var(--green,#27ae60)');
    setTimeout(function() { location.reload(); }, 800);
  } catch(e) {
    showSyncMsg('Invalid sync code!', 'var(--red,#c0392b)');
  }
  input.readOnly = true;
}

function showSyncMsg(text, color) {
  var el = document.getElementById('syncMsg');
  if (!el) return;
  el.textContent = text;
  el.style.color = color;
  setTimeout(function() { if (el) el.textContent = ''; }, 4000);
}
