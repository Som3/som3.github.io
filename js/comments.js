<script type="text/javascript">
      
      function loadComments(data) {
          if (data.length > 0) {
            $("#comments").append('<ul id="comments-list" class="comments-list">')
          }
          
          for (var i=0; i < data.length; i++) {
              var cuser = data[i].user.login;
              var cuserlink = "https://www.github.com/" + data[i].user.login;
              var clink = "https://github.com/Som3/som3.github.io/issues/{{.Params.commentIssueId}}#issuecomment-" + 
                  data[i].url.substring(data[i].url.lastIndexOf("/") + 1);
              var cbody = data[i].body_html;

              if (cbody)

              var cavatarlink = data[i].user.avatar_url;
              var cdate = data[i].created_at;
              var isAutor = cuser.toUpperCase() === {{ .Site.Params.social.Github }}.toUpperCase()
              
              var authorStyle = isAutor ? "by-author" : "";

              var img = "<div class='comment-avatar'><a href='" + cuserlink  + "'><img src=" + cavatarlink + " alt=''/></a></div>"
              var date = "<a href='" + clink + "'><span>" + cdate + "</span></a>"

              $("#comments-list").append("<li><div class='comment-main-level'>" + img 
              	+ '<div class="comment-box"><div class="comment-head"><h6 class="comment-name ' +  authorStyle +
              	'"><a href=' + cuserlink + '>' + cuser + '</a></h6>' + date + '</div>'
              	+ '<div class="comment-content">' + cbody + '</div></div></div></li>')
              replaceEmoji()
          }
      }

      $.ajax("https://api.github.com/repos/Som3/som3.github.io/issues/{{.Params.commentIssueId}}/comments", {
          headers: {Accept: "application/vnd.github.full+json"},
          success: function(msg){
              loadComments(msg);
          }
      });

      function replaceEmoji() {
      	var emoji = $("g-emoji");
      }
  </script>