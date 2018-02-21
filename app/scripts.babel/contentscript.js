'use strict';

function tweetsave(tweet_id) {
    open('https://tweetsave.com/?tweet='+tweet_id);
}

let content = `<style type="text/css"> \
         .Icon--cloud:before {content:"\\f216";} \
        </style> \
        <div class="ProfileTweet-action ProfileTweet-action--tweetsave"> \
            <button class="ProfileTweet-actionButton u-textUserColorHover js-actionButton js-actionTweetSave" type="button">
                <div class="IconContainer js-tooltip" title="TweetSave"> \
                    <span class="Icon Icon--medium Icon--cloud"></span> \
                    <span class="u-hiddenVisually">TweetSave</span> \
                </div> \
            </button> \
        </div>`;

$('.ProfileTweet-actionList').each(function() {
    $(this).append(content);
});


$('button.js-actionTweetSave').on('click', event => {
    tweetsave($(event.target).parents('li').attr('data-item-id'));
});
