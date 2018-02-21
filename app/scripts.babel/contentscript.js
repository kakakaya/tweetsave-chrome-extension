'use strict';

console.log('\'Allo \'Allo! Content script');

let content = `<style type="text/css"> \
         .Icon--cloud:before {content:"\\f216";} \
        </style> \
        <div class="ProfileTweet-action ProfileTweet-action--tweetsave"> \
            <button class="ProfileTweet-actionButton u-textUserColorHover js-actionButton js-actionTweetSave" data-modal="ProfileTweet-reply" type="button" onclick="open('https://tweetsave.com/?tweet='+encodeURIComponent(document.location))">
                <div class="IconContainer js-tooltip" title="TweetSave"> \
                    <span class="Icon Icon--medium Icon--cloud"></span> \
                    <span class="u-hiddenVisually">TweetSave</span> \
                </div> \
            </button> \
        </div>`;

$('.ProfileTweet-actionList').each(function() {
    $(this).append(content);
});
