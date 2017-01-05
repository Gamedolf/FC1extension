chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "clicked_browser_action") {
      $(".content").click(function() {
        $(this).attr('id', 'content');
        $(this).after('<div id="tresult"></div>');
        var content = document.getElementById("content");
        var tresult = document.getElementById("tresult");
        $(this).removeAttr('id');
        var nodes = content.innerText;
        var sNodes = nodes.match(/^.+: .+[-–].*$/gm).filter(Boolean);
        var newTable = "";
        var table = document.createElement('table');
        var sColumns = ["Item", "Buy", "Sell", "Profit"];
        var table = document.createElement('table');
        var tr = document.createElement('tr');
        for (a = 0; a < sColumns.length; a++) {
          var th = document.createElement('th');
          th.innerText = sColumns[a];
          tr.appendChild(th);
        }
        table.appendChild(tr);
        var oItem = [],
          oBuy = [],
          oSell = [],
          oProfit = [];
        for (b = 0; b < sNodes.length; b++) {
          var sItem = sNodes[b].split(":");
          for (c = 0; c < sItem.length; c++) {
            if (c % 2 === 0) {
              oItem.push(sItem[c]);
            } else {
              oProfit.push(sItem[c]);
            }
          }
        }
        for (var d = 0; d < oProfit.length; d++) {
          var spNum = oProfit[d].replace("*", "").split(/-|–/g);
          oBuy.push(spNum[0]);
          oSell.push(spNum[1]);
        }
        for (var f = 0; f < sNodes.length - 1; f++) {
          var tr2 = document.createElement('tr');
          var td = document.createElement('td');
          td.innerText = oItem[f];
          tr2.appendChild(td);
          td = document.createElement('td');
          td.innerText = oBuy[f];
          tr2.appendChild(td);
          td = document.createElement('td');
          td.innerText = oSell[f];
          tr2.appendChild(td);
          td = document.createElement('td');
          td.innerText = oSell[f] - oBuy[f];
          tr2.appendChild(td);
          table.appendChild(tr2);
        }
        tresult.appendChild(table);
        $(table).attr('id', 'osu123');
        $(table).attr('width', '50%');
        $(table).attr('border', '1');
        $('table').each(function() {
          var $this = $(this);
          $this.children('tbody').children().unwrap();
          $this.children('tr:has(th)').wrapAll('<thead>');
          $this.children('tr:has(td)').wrapAll('<tbody>');
        });
        $("#osu123").tablesorter();
        $("#osu123").removeAttr('id');
      });
    }
  }

)
