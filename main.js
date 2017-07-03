$(document).ready(function() {
  function getUserFollowers(callback, username) {
    $.ajax({
        url: 'https://api.twitter.com/1.1/followers/list.json?cursor=-1&screen_name=' + username + '&skip_status=true&include_user_entities=false&count=12',
        method: "GET",
        contentType: 'application/json',
        dataType: 'json',
        headers: {
              'Authorization':'Bearer AAAAAAAAAAAAAAAAAAAAAOR51QAAAAAAS1Gcr9vjIvK0qjnSpswwzG8J8Ig%3D8eNJQpLLS95pYW6odedb9Z7n5jV0DcsE8rgFp6huw3un04PFxj'
        },
        success: callback
    })
  }

  $('#submit_button').on('click', function(e) {
    let username = $('#username_input').val()
    $('#flatiron-test').empty()
    getUserFollowers(getData, username)
  })

  function getData(data) {
    let users = data.users
    users.forEach(function(user) {
      $('#flatiron-test').append(`<div class="Grid-cell u-size1of2 u-lg-size1of3 u-mb10" data-test-selector="ProfileTimelineUser" role="presentation">
        <div class="js-stream-item" role="listitem" data-item-id="17881816" id="stream-item-user-17881816" data-item-type="user">
           <div class="ProfileCard js-actionable-user


        " data-screen-name="colortheory" data-user-id="17881816" data-feedback-token="" data-impression-id="">
      <a class="ProfileCard-bg js-nav" href="/colortheory" tabindex="-1" aria-hidden="true" style="
        background-color: #511EBF;
        background-image: url(${user.profile_banner_url});">
      </a>

      <div class="ProfileCard-content">
        <a class="ProfileCard-avatarLink js-nav js-tooltip" href="/colortheory" title="Brian Hazard" tabindex="-1" aria-hidden="true">
          <img class="ProfileCard-avatarImage js-action-profile-avatar" src="${user.profile_image_url}" alt="">
        </a>

          <div class="ProfileCard-actions">
            <div class="ProfileCard-userActions with-rightCaret js-userActions">
              <div class="UserActions   UserActions--small u-textLeft">
        <div class="user-actions btn-group not-following not-muting can-dm " data-user-id="17881816" data-screen-name="colortheory" data-name="Brian Hazard" data-protected="false">
          <span class="UserActions-moreActions u-inlineBlock">
              <button type="button" class="js-tooltip unmute-button btn small plain-btn" title="Unmute @colortheory" data-placement="top">
                <span class="Icon Icon--muted Icon--medium"><span class="visuallyhidden">Unmute <span class="username u-dir" dir="ltr">@<b>colortheory</b></span></span></span>
              </button><button type="button" class="first-load js-tooltip mute-button btn small plain-btn" title="Mute @colortheory" data-placement="top">
                <span class="Icon Icon--unmuted Icon--medium"><span class="visuallyhidden">Mute <span class="username u-dir" dir="ltr">@<b>colortheory</b></span></span></span>
              </button></span><span class="user-actions-follow-button js-follow-btn follow-button">
      <button type="button" class="
        EdgeButton
        EdgeButton--secondary
        EdgeButton--small

        button-text
        follow-text
        ">
          <span class="Icon Icon--follow"></span>
          <span>Follow</span>
      </button>
      <button type="button" class="
        EdgeButton
        EdgeButton--primary
        EdgeButton--small

        button-text
        following-text">
          Following
      </button>
      <button type="button" class="
        EdgeButton
        EdgeButton--danger
        EdgeButton--small

        button-text
        unfollow-text">
          Unfollow
      </button>
      <button type="button" class="
        EdgeButton
        EdgeButton--invertedDanger
        EdgeButton--small

        button-text
        blocked-text">
        Blocked
      </button>
      <button type="button" class="
        EdgeButton
        EdgeButton--danger
        EdgeButton--small

        button-text
        unblock-text">
        Unblock
      </button>
      <button type="button" class="
        EdgeButton
        EdgeButton--secondary
        EdgeButton--small

        button-text
        pending-text">
        Pending
      </button>
      <button type="button" class="
        EdgeButton
        EdgeButton--secondary
        EdgeButton--small

        button-text
        cancel-text">
        Cancel
      </button>
      </span>

      <div class="dropdown ">
      <button type="button" class="user-dropdown dropdown-toggle js-dropdown-toggle js-link js-tooltip btn plain-btn small-user-dropdown" title="More user actions" aria-haspopup="true">
        <span class="user-dropdown-icon Icon Icon--dotsVertical Icon--small"><span class="visuallyhidden">User actions</span></span>
      </button>
      <div class="dropdown-menu dropdown-menu--rightAlign is-autoCentered is-forceRight">
        <div class="dropdown-caret">
          <span class="caret-outer"></span>
          <span class="caret-inner"></span>
        </div>
        <ul>
          <li class="mention-text not-blocked"><button type="button" class="dropdown-link">Tweet to <span class="username u-dir" dir="ltr">@<b>colortheory</b></span></button></li>
          <li class="dm-text"><button type="button" class="dropdown-link">Send a Direct Message</button></li>
          <li class="list-text not-blocked"><button type="button" class="dropdown-link">Add or remove from lists…</button></li>
          <li class="dropdown-divider not-blocked"></li>
              <li class="mute-user-item"><button type="button" class="dropdown-link">Mute <span class="username u-dir" dir="ltr">@<b>colortheory</b></span></button></li>
        <li class="unmute-user-item"><button type="button" class="dropdown-link">Unmute <span class="username u-dir" dir="ltr">@<b>colortheory</b></span></button></li>

            <li class="block-text not-blocked"><button type="button" class="dropdown-link">Block <span class="username u-dir" dir="ltr">@<b>colortheory</b></span></button></li>
            <li class="unblock-text"><button type="button" class="dropdown-link">Unblock <span class="username u-dir" dir="ltr">@<b>colortheory</b></span></button></li>
            <li class="report-text"><button type="button" class="dropdown-link">Report <span class="username u-dir" dir="ltr">@<b>colortheory</b></span></button></li>
          <li class="hide-suggestion-text"><button type="button" class="dropdown-link">Hide this suggestion</button></li>
          <li class="dropdown-divider is-following"></li>
          <li class="retweet-on-text"><button type="button" class="dropdown-link">Turn on Retweets</button></li>
          <li class="retweet-off-text"><button type="button" class="dropdown-link">Turn off Retweets</button></li>
          <li class="device-notifications-on-text"><button type="button" class="dropdown-link">Turn on mobile notifications</button></li>
          <li class="device-notifications-off-text"><button type="button" class="dropdown-link">Turn off mobile notifications</button></li>
          <li class="dropdown-divider is-embeddable"></li>
          <li class="embed-profile"><button type="button" class="dropdown-link">Embed this Profile</button></li>
        </ul>
      </div>
      </div>

        </div>
      </div>

            </div>
          </div>

        <div class="ProfileCard-userFields">
          <div class="ProfileNameTruncated account-group">
      <div class="u-textTruncate u-inlineBlock ProfileNameTruncated-withBadges ProfileNameTruncated-withBadges--1">
        <a class="fullname ProfileNameTruncated-link u-textInheritColor js-nav" href="/colortheory" data-aria-label-part="">
          ${user.name}</a></div><span class="UserBadges"><span class="Icon Icon--verified"><span class="u-hiddenVisually">Verified account</span></span></span>
      </div>

          <span class="ProfileCard-screenname">
            <a href="#" class="ProfileCard-screennameLink u-linkComplex js-nav" data-aria-label-part="">
              <span class="username u-dir" dir="ltr">@<b id="goToUser" class="u-linkComplex-target">${user.screen_name}</b></span>
            </a><span>&rlm;</span> <span class="FollowStatus">Follows you</span>
          </span>
          <p class="ProfileCard-bio u-dir" dir="ltr" data-aria-label-part="">${user.description}</p>
        </div>
      </div>
      </div>


      </div>
      </div>`)
    })
    console.log(users)
  }

})
