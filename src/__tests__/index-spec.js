const createSchemaFromJSON = require('..');

const simpleJson = {
  "name": "brandon",
  "id": 1,
  "favorite_color": "teal",
  "job": {
    "type": "web developer",
    "years": 1
  },
  "dogs": ["minnie", "navi"]
};

// code folding is your friend
const hugeJson = {
  "activities": {
    "members": {
      "disable_replies_limit": 200,
      "creation_limit": 500,
      "limit": 200
    }
  },
  "privacy": {
    "image_url": "https://remind.imgix.net/797566fa-82ac-46d8-bdea-e3c91e3c4e1d/settings_about_truste.png",
    "policy_url": "https://privacy-policy.truste.com/certified-policy/mobile/app/en/Remind.com/"
  },
  "users": {
    "emailregexp": "\\A([\\w\\.%\\+\\-']+)@([\\w\\-]+\\.)+([\\w]{2,})\\z",
    "minimum_age": 0,
    "maximum_age": 150,
    "activated": {
      "recipients_for_message": 2
    }
  },
  "sharing": {
    "email": {
      "bcc": "sharing.is.caring@mail.go.remind.com",
      "subject": "Great new classroom tool!",
      "body": {
        "html": "Hey! \n\nI have been using Remind to text my students and parents without sharing my personal phone number.\nYou have to try it! It saves time, students love it and it is free! \n\nHere is the link: {{referral_url}}"
      },
      "teacher": {
        "subject": "Great new classroom tool!",
        "body": {
          "html": "Hey! <br/><br/>I have been using Remind to text my students and parents without sharing my personal phone number.<br/>You have to try it! It saves time, students love it and it is free! <br/><br/>Here is the link: <a href=\"https://www.remind.com/?rid={{user_id}}&utm_medium={{platform}}&utm_source=email&utm_campaign=teacher_share\">remind.com</a>",
          "text": "Hey! \n\nI have been using Remind to text my students and parents without sharing my personal phone number.\nYou have to try it! It saves time, students love it and it is free! \n\nHere is the link: https://www.remind.com/?rid={{user_id}}&utm_medium={{platform}}&utm_source=email&utm_campaign=teacher_share"
        },
        "bcc": "sharing.is.caring@mail.go.remind.com"
      },
      "student": {
        "subject": "Check out this free communication tool!",
        "body": {
          "html": "Hey!<br/><br/>My teachers have been using the <a href='http://rmd.me/a?rid={{user_id}}&utm_source=email&utm_medium={{platform}}&utm_campaign=student_share'>Remind app</a> to message our class before assignments are due, share photos and update us with last minute changes. You should <a href='mailto:?subject=I%27m%20using%20Remind&body=My%20teachers%20have%20been%20using%20the%20Remind%20app%20to%20message%20our%20class%20before%20assignments%20are%20due%2C%20share%20photos%20and%20update%20us%20with%20last%20minute%20changes.%20Check%20it%20out!%20http%3A%2F%2Frmd.me%2Fa%3Frid%3D{{user_id}}%26utm_source%3Demail%26utm_medium%3D{{platform}}%26utm_campaign%3Dstudent_share.'>tell your teachers about it!</a> It's really helpful and free.",
          "text": "Hey!\n\nMy teachers have been using the Remind app (http://www.remind.com/?rid={{user_id}}&utm_source=email&utm_medium={{platform}}&utm_campaign=student_share) to message our class before assignments are due, share photos and update us with last minute changes. You should tell your teachers about it! It's really helpful and free."
        },
        "bcc": "join@mail.go.remind.com"
      },
      "parent": {
        "subject": "Check out this free communication tool!",
        "body": {
          "html": "Hey!<br/><br/>My teachers have been using the <a href='http://rmd.me/a?rid={{user_id}}&utm_source=email&utm_medium={{platform}}&utm_campaign=parent_share'>Remind app</a> to message our class before assignments are due, share photos and update us with last minute changes. You should <a href='mailto:?subject=I%27m%20using%20Remind&body=My%20teachers%20have%20been%20using%20the%20Remind%20app%20to%20message%20our%20class%20before%20assignments%20are%20due%2C%20share%20photos%20and%20update%20us%20with%20last%20minute%20changes.%20Check%20it%20out!%20http%3A%2F%2Frmd.me%2Fa%3Frid%3D{{user_id}}%26utm_source%3Demail%26utm_medium%3D{{platform}}%26utm_campaign%3Dparent_share.'>tell your teachers about it!</a> It's really helpful and free.",
          "text": "Hey!\n\nMy teachers have been using the Remind app (http://www.remind.com/?rid={{user_id}}&utm_source=email&utm_medium={{platform}}&utm_campaign=parent_share) to message our class before assignments are due, share photos and update us with last minute changes. You should tell your teachers about it! It's really helpful and free."
        },
        "bcc": "join@mail.go.remind.com"
      }
    },
    "postpone_invite_banner_for": 864000,
    "facebook": {
      "student": "I wish all my teachers were using the Remind app to message our class before assignments are due, share photos and update us with last minute changes.",
      "student_url": "https://www.remind.com/?rid={{user_id}}&utm_source=facebook&utm_medium={{platform}}&utm_campaign=student_share",
      "parent": "My student's teachers have been using the Remind app to message our class before assignments are due, share photos and update us with last minute changes.",
      "parent_url": "https://www.remind.com/?rid={{user_id}}&utm_source=facebook&utm_medium={{platform}}&utm_campaign=parent_share",
      "teacher": "Use Remind to connect instantly with your class. A free, safe, and easy way to engage students and involve parents.",
      "teacher_url": "https://www.remind.com/?rid={{user_id}}&utm_source=facebook&utm_medium={{platform}}&utm_campaign=teacher_share"
    },
    "twitter": {
      "student": "I wish all my teachers were using the Remind app to message our class before assignments are due! https://www.remind.com/?rid={{user_id}}&utm_source=twitter&utm_medium={{platform}}&utm_campaign=student_share",
      "parent": "My student's teachers have been using the Remind app to message our class before assignments are due and more! https://www.remind.com/?rid={{user_id}}&utm_source=twitter&utm_medium={{platform}}&utm_campaign=parent_share",
      "teacher": "Use Remind to connect instantly with your class. A free, safe, and easy way to engage students and involve parents. https://www.remind.com/?rid={{user_id}}&utm_source=twitter&utm_medium={{platform}}&utm_campaign=teacher_share"
    },
    "pinterest": {
      "image": "http://d3498ple9xfqkw.cloudfront.net/common/pinterest/remind-app.jpg",
      "student": "I wish all my teachers were using the Remind app to message our class before assignments are due, share photos and update us with last minute changes.",
      "student_url": "https://www.remind.com/?rid={{user_id}}&utm_source=pinterest&utm_medium={{platform}}&utm_campaign=student_share",
      "parent": "My student's teachers have been using the Remind app to message our class before assignments are due, share photos and update us with last minute changes.",
      "parent_url": "https://www.remind.com/?rid={{user_id}}&utm_source=pinterest&utm_medium={{platform}}&utm_campaign=parent_share",
      "teacher": "Use Remind to connect instantly with your class. A free, safe, and easy way to engage students and involve parents.",
      "teacher_url": "https://www.remind.com/?rid={{user_id}}&utm_source=pinterest&utm_medium={{platform}}&utm_campaign=teacher_share"
    },
    "sms": {
      "student": "My teachers have been using the Remind app to message our class before assignments are due, share photos and update us with last minute changes. Check it out:\n\nhttps://www.remind.com/?rid={{user_id}}&utm_source=sms&utm_medium={{platform}}&utm_campaign=student_share",
      "parent": "My student's teachers have been using the Remind app to message our class before assignments are due, share photos and update us with last minute changes. Check it out:\n\nhttps://www.remind.com/?rid={{user_id}}&utm_source=sms&utm_medium={{platform}}&utm_campaign=parent_share",
      "teacher": "Hey, I'm using Remind, a free app that lets me safely send 1-way texts to students and parents. Check it out:\n\nhttps://www.remind.com/?rid={{user_id}}&utm_source=sms&utm_medium={{platform}}&utm_campaign=teacher_share"
    },
    "whatsapp": {
      "student": "whatsapp://send?text=My%20teachers%20have%20been%20using%20the%20Remind%20app%20to%20message%20our%20class%20before%20assignments%20are%20due%2C%20share%20photos%20and%20update%20us%20with%20last%20minute%20changes.%20Check%20it%20out%3A%20https%3A%2F%2Fwww.remind.com%2F%3Frid%3D{{user_id}}%26utm_source%3Dwhatsapp%26utm_medium%3D%{{platform}}%26utm_campaign%3Dstudent_share",
      "parent": "whatsapp://send?text=My%20student%27s%20teachers%20have%20been%20using%20the%20Remind%20app%20to%20message%20our%20class%20before%20assignments%20are%20due%2C%20share%20photos%20and%20update%20us%20with%20last%20minute%20changes.%20Check%20it%20out%3A%20https%3A%2F%2Fwww.remind.com%2F%3Frid%3D{{user_id}}%26utm_source%3Dwhatsapp%26utm_medium%3D{{platform}}%26utm_campaign%3Dparent_share",
      "teacher": "whatsapp://send?text=Hey%2C%20I%27m%20using%20Remind%2C%20a%20free%20app%20that%20lets%20me%20safely%20send%201-way%20texts%20to%20students%20and%20parents.%20Check%20it%20out%3A%20https%3A%2F%2Fwww.remind.com%2F%3Frid%3D{{user_id}}%26utm_source%3Dwhatsapp%26utm_medium%3D{{platform}}%26utm_campaign%3Dteacher_share"
    }
  },
  "invite": {
    "email": {
      "bcc": "join@mail.go.remind.com",
      "subject": "Get my updates for {{group_name}}!",
      "body": {
        "text": "This year I'm using Remind to send updates about important class information.\n\nTo sign up for {{group_name}} notifications, please visit\n{{referral_url}}",
        "html": "This year I'm using Remind to send updates about important class information.<br><br>To sign up for {{group_name}} notifications, please visit<br><a href=\"{{referral_url}}\">{{referral_url}}</a>"
      },
      "teacher": {
        "subject": "Get my updates for {{group_name}}!",
        "body": {
          "text": "This year I'm using Remind to send updates about important class information.\n\nTo sign up for {{group_name}} notifications, please visit\nhttps://www.remind.com/join/{{group_code}}?utm_source=email&utm_medium={{platform}}&utm_campaign=join_invite",
          "html": "This year I'm using Remind to send updates about important class information.<br><br>To sign up for {{group_name}} notifications, please visit<br><a href=\"https://www.remind.com/join/{{group_code}}?utm_source=email&utm_medium={{platform}}&utm_campaign=join_invite\">https://www.remind.com/join/{{group_code}}</a>"
        },
        "bcc": "join@mail.go.remind.com"
      }
    },
    "url": "https://www.remind.com/join/{{group_code}}?utm_medium={{platform}}",
    "facebook": {
      "teacher": "{{user_signature}}: join my {{group_name}} class on Remind!"
    },
    "twitter": {
      "teacher": "{{user_signature}}: join my {{group_name}} class on Remind!"
    },
    "sms": {
      "teacher": "{{user_signature}}: join my {{group_name}} class on Remind!"
    }
  },
  "groups": {
    "limit": 100,
    "name_regex": "\\A[a-zA-Z0-9-]+\\z",
    "owners_limit": 900
  },
  "chats": {
    "members": {
      "limit": 10
    },
    "search": {
      "page_size": 50,
      "recommended_page_size": 40
    }
  },
  "payment": {
    "amount_per_person": {
      "min": 100,
      "max": 200000
    },
    "stripe": {
      "publishable_key": "pk_live_b6BqS8b1KHiOpbxoQ8bMkiNk"
    }
  },
  "messages": {
    "characters": {
      "long_limit": 300,
      "long_limit_with_files": 300,
      "preview_length": 114,
      "preview_link_length": 22,
      "soft_limit": 140,
      "soft_limit_with_files": 117,
      "limit": 140,
      "limit_with_files": 117,
      "limit_push_only": 240,
      "urlweight": 22,
      "stamp_url": "\\bhttp://rmd.me/u\\b",
      "long_message_incentive_url": "\\bhttp://rmd.me/r\\b",
      "urlregexp": "(?:[Hh]ttps?://|(?=[Ww]ww\\.))(?:(?:[-0-9a-zA-Z]+\\.)+[A-Za-z][a-z]{1,3}\\b|[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+)(?:/|(?=\\?[a-zA-Z0-9]))?(?:[-_.~0-9a-zA-Z!*';:@&=+$,/?%#\\[\\]]*\\([-_.~0-9a-zA-Z!*';:@&=+$,/?%#\\[\\]]*\\)(?![-_.~0-9a-zA-Z!*'();:@&=+$,/?%#\\[\\]]*[-_~0-9a-zA-Z*'@&=+$,/%#\\[\\]])|[-_.~0-9a-zA-Z!*'();:@&=+$,/?%#\\[\\]]*[-_~0-9a-zA-Z*'@&=+$,/%#\\[\\]])?"
    },
    "files": {
      "limit": 1
    },
    "timing": {
      "weekday": {
        "early": 7,
        "late": 21
      },
      "weekend": {
        "early": 9,
        "late": 21
      }
    },
    "timeout": 7200
  },
  "tymk": {
    "supported_countries": [
      "US"
    ],
    "real_time_invite_batch_period_days": 30
  },
  "manual_invite": {
    "unsupported_countries": [],
    "unsupported_emails": [],
    "unsupported_area_codes": []
  },
  "direct_add": {
    "unsupported_countries": [
      "CA"
    ],
    "unsupported_emails": [
      ".ca",
      ".ca.edu"
    ],
    "unsupported_area_codes": [
      204,
      226,
      236,
      249,
      250,
      289,
      306,
      343,
      365,
      403,
      416,
      418,
      431,
      437,
      438,
      450,
      506,
      514,
      519,
      548,
      579,
      581,
      587,
      604,
      613,
      639,
      647,
      705,
      709,
      778,
      780,
      782,
      807,
      819,
      825,
      867,
      873,
      902,
      905
    ]
  },
  "organizations": {
    "minimum_name_query_length": 1,
    "picker": {
      "allowed_country_codes": [
        "US",
        "BR"
      ]
    }
  },
  "devices": {
    "sms": {
      "verification_timeout": 10
    },
    "email": {
      "blacklisted_domains": [
        "mail.remind.com",
        "mail.remind101.com"
      ]
    }
  },
  "countries": [
    {
      "name": "Afghanistan",
      "code": "AF"
    },
    {
      "name": "Åland Islands",
      "code": "AX"
    },
    {
      "name": "Albania",
      "code": "AL"
    },
    {
      "name": "Algeria",
      "code": "DZ"
    },
    {
      "name": "American Samoa",
      "code": "AS"
    },
    {
      "name": "Andorra",
      "code": "AD"
    },
    {
      "name": "Angola",
      "code": "AO"
    },
    {
      "name": "Anguilla",
      "code": "AI"
    },
    {
      "name": "Antarctica",
      "code": "AQ"
    },
    {
      "name": "Antigua and Barbuda",
      "code": "AG"
    },
    {
      "name": "Argentina",
      "code": "AR"
    },
    {
      "name": "Armenia",
      "code": "AM"
    },
    {
      "name": "Aruba",
      "code": "AW"
    },
    {
      "name": "Australia",
      "code": "AU"
    },
    {
      "name": "Austria",
      "code": "AT"
    },
    {
      "name": "Azerbaijan",
      "code": "AZ"
    },
    {
      "name": "Bahamas",
      "code": "BS"
    },
    {
      "name": "Bahrain",
      "code": "BH"
    },
    {
      "name": "Bangladesh",
      "code": "BD"
    },
    {
      "name": "Barbados",
      "code": "BB"
    },
    {
      "name": "Belarus",
      "code": "BY"
    },
    {
      "name": "Belgium",
      "code": "BE"
    },
    {
      "name": "Belize",
      "code": "BZ"
    },
    {
      "name": "Benin",
      "code": "BJ"
    },
    {
      "name": "Bermuda",
      "code": "BM"
    },
    {
      "name": "Bhutan",
      "code": "BT"
    },
    {
      "name": "Bolivia, Plurinational State of",
      "code": "BO"
    },
    {
      "name": "Bonaire, Sint Eustatius and Saba",
      "code": "BQ"
    },
    {
      "name": "Bosnia and Herzegovina",
      "code": "BA"
    },
    {
      "name": "Botswana",
      "code": "BW"
    },
    {
      "name": "Bouvet Island",
      "code": "BV"
    },
    {
      "name": "Brazil",
      "code": "BR"
    },
    {
      "name": "British Indian Ocean Territory",
      "code": "IO"
    },
    {
      "name": "Brunei Darussalam",
      "code": "BN"
    },
    {
      "name": "Bulgaria",
      "code": "BG"
    },
    {
      "name": "Burkina Faso",
      "code": "BF"
    },
    {
      "name": "Burundi",
      "code": "BI"
    },
    {
      "name": "Cambodia",
      "code": "KH"
    },
    {
      "name": "Cameroon",
      "code": "CM"
    },
    {
      "name": "Canada",
      "code": "CA"
    },
    {
      "name": "Cape Verde",
      "code": "CV"
    },
    {
      "name": "Cayman Islands",
      "code": "KY"
    },
    {
      "name": "Central African Republic",
      "code": "CF"
    },
    {
      "name": "Chad",
      "code": "TD"
    },
    {
      "name": "Chile",
      "code": "CL"
    },
    {
      "name": "China",
      "code": "CN"
    },
    {
      "name": "Christmas Island",
      "code": "CX"
    },
    {
      "name": "Cocos (Keeling) Islands",
      "code": "CC"
    },
    {
      "name": "Colombia",
      "code": "CO"
    },
    {
      "name": "Comoros",
      "code": "KM"
    },
    {
      "name": "Congo",
      "code": "CG"
    },
    {
      "name": "Congo, the Democratic Republic of the",
      "code": "CD"
    },
    {
      "name": "Cook Islands",
      "code": "CK"
    },
    {
      "name": "Costa Rica",
      "code": "CR"
    },
    {
      "name": "Côte d'Ivoire",
      "code": "CI"
    },
    {
      "name": "Croatia",
      "code": "HR"
    },
    {
      "name": "Cuba",
      "code": "CU"
    },
    {
      "name": "Curaçao",
      "code": "CW"
    },
    {
      "name": "Cyprus",
      "code": "CY"
    },
    {
      "name": "Czech Republic",
      "code": "CZ"
    },
    {
      "name": "Denmark",
      "code": "DK"
    },
    {
      "name": "Djibouti",
      "code": "DJ"
    },
    {
      "name": "Dominica",
      "code": "DM"
    },
    {
      "name": "Dominican Republic",
      "code": "DO"
    },
    {
      "name": "Ecuador",
      "code": "EC"
    },
    {
      "name": "Egypt",
      "code": "EG"
    },
    {
      "name": "El Salvador",
      "code": "SV"
    },
    {
      "name": "Equatorial Guinea",
      "code": "GQ"
    },
    {
      "name": "Eritrea",
      "code": "ER"
    },
    {
      "name": "Estonia",
      "code": "EE"
    },
    {
      "name": "Ethiopia",
      "code": "ET"
    },
    {
      "name": "Falkland Islands (Malvinas)",
      "code": "FK"
    },
    {
      "name": "Faroe Islands",
      "code": "FO"
    },
    {
      "name": "Fiji",
      "code": "FJ"
    },
    {
      "name": "Finland",
      "code": "FI"
    },
    {
      "name": "France",
      "code": "FR"
    },
    {
      "name": "French Guiana",
      "code": "GF"
    },
    {
      "name": "French Polynesia",
      "code": "PF"
    },
    {
      "name": "French Southern Territories",
      "code": "TF"
    },
    {
      "name": "Gabon",
      "code": "GA"
    },
    {
      "name": "Gambia",
      "code": "GM"
    },
    {
      "name": "Georgia",
      "code": "GE"
    },
    {
      "name": "Germany",
      "code": "DE"
    },
    {
      "name": "Ghana",
      "code": "GH"
    },
    {
      "name": "Gibraltar",
      "code": "GI"
    },
    {
      "name": "Greece",
      "code": "GR"
    },
    {
      "name": "Greenland",
      "code": "GL"
    },
    {
      "name": "Grenada",
      "code": "GD"
    },
    {
      "name": "Guadeloupe",
      "code": "GP"
    },
    {
      "name": "Guam",
      "code": "GU"
    },
    {
      "name": "Guatemala",
      "code": "GT"
    },
    {
      "name": "Guernsey",
      "code": "GG"
    },
    {
      "name": "Guinea",
      "code": "GN"
    },
    {
      "name": "Guinea-Bissau",
      "code": "GW"
    },
    {
      "name": "Guyana",
      "code": "GY"
    },
    {
      "name": "Haiti",
      "code": "HT"
    },
    {
      "name": "Heard Island and McDonald Islands",
      "code": "HM"
    },
    {
      "name": "Holy See (Vatican City State)",
      "code": "VA"
    },
    {
      "name": "Honduras",
      "code": "HN"
    },
    {
      "name": "Hong Kong",
      "code": "HK"
    },
    {
      "name": "Hungary",
      "code": "HU"
    },
    {
      "name": "Iceland",
      "code": "IS"
    },
    {
      "name": "India",
      "code": "IN"
    },
    {
      "name": "Indonesia",
      "code": "ID"
    },
    {
      "name": "Iran, Islamic Republic of",
      "code": "IR"
    },
    {
      "name": "Iraq",
      "code": "IQ"
    },
    {
      "name": "Ireland",
      "code": "IE"
    },
    {
      "name": "Isle of Man",
      "code": "IM"
    },
    {
      "name": "Israel",
      "code": "IL"
    },
    {
      "name": "Italy",
      "code": "IT"
    },
    {
      "name": "Jamaica",
      "code": "JM"
    },
    {
      "name": "Japan",
      "code": "JP"
    },
    {
      "name": "Jersey",
      "code": "JE"
    },
    {
      "name": "Jordan",
      "code": "JO"
    },
    {
      "name": "Kazakhstan",
      "code": "KZ"
    },
    {
      "name": "Kenya",
      "code": "KE"
    },
    {
      "name": "Kiribati",
      "code": "KI"
    },
    {
      "name": "Korea, Democratic People's Republic of",
      "code": "KP"
    },
    {
      "name": "Korea, Republic of",
      "code": "KR"
    },
    {
      "name": "Kuwait",
      "code": "KW"
    },
    {
      "name": "Kyrgyzstan",
      "code": "KG"
    },
    {
      "name": "Lao People's Democratic Republic",
      "code": "LA"
    },
    {
      "name": "Latvia",
      "code": "LV"
    },
    {
      "name": "Lebanon",
      "code": "LB"
    },
    {
      "name": "Lesotho",
      "code": "LS"
    },
    {
      "name": "Liberia",
      "code": "LR"
    },
    {
      "name": "Libya",
      "code": "LY"
    },
    {
      "name": "Liechtenstein",
      "code": "LI"
    },
    {
      "name": "Lithuania",
      "code": "LT"
    },
    {
      "name": "Luxembourg",
      "code": "LU"
    },
    {
      "name": "Macao",
      "code": "MO"
    },
    {
      "name": "Macedonia, the former Yugoslav Republic of",
      "code": "MK"
    },
    {
      "name": "Madagascar",
      "code": "MG"
    },
    {
      "name": "Malawi",
      "code": "MW"
    },
    {
      "name": "Malaysia",
      "code": "MY"
    },
    {
      "name": "Maldives",
      "code": "MV"
    },
    {
      "name": "Mali",
      "code": "ML"
    },
    {
      "name": "Malta",
      "code": "MT"
    },
    {
      "name": "Marshall Islands",
      "code": "MH"
    },
    {
      "name": "Martinique",
      "code": "MQ"
    },
    {
      "name": "Mauritania",
      "code": "MR"
    },
    {
      "name": "Mauritius",
      "code": "MU"
    },
    {
      "name": "Mayotte",
      "code": "YT"
    },
    {
      "name": "Mexico",
      "code": "MX"
    },
    {
      "name": "Micronesia, Federated States of",
      "code": "FM"
    },
    {
      "name": "Moldova, Republic of",
      "code": "MD"
    },
    {
      "name": "Monaco",
      "code": "MC"
    },
    {
      "name": "Mongolia",
      "code": "MN"
    },
    {
      "name": "Montenegro",
      "code": "ME"
    },
    {
      "name": "Montserrat",
      "code": "MS"
    },
    {
      "name": "Morocco",
      "code": "MA"
    },
    {
      "name": "Mozambique",
      "code": "MZ"
    },
    {
      "name": "Myanmar",
      "code": "MM"
    },
    {
      "name": "Namibia",
      "code": "NA"
    },
    {
      "name": "Nauru",
      "code": "NR"
    },
    {
      "name": "Nepal",
      "code": "NP"
    },
    {
      "name": "Netherlands",
      "code": "NL"
    },
    {
      "name": "New Caledonia",
      "code": "NC"
    },
    {
      "name": "New Zealand",
      "code": "NZ"
    },
    {
      "name": "Nicaragua",
      "code": "NI"
    },
    {
      "name": "Niger",
      "code": "NE"
    },
    {
      "name": "Nigeria",
      "code": "NG"
    },
    {
      "name": "Niue",
      "code": "NU"
    },
    {
      "name": "Norfolk Island",
      "code": "NF"
    },
    {
      "name": "Northern Mariana Islands",
      "code": "MP"
    },
    {
      "name": "Norway",
      "code": "NO"
    },
    {
      "name": "Oman",
      "code": "OM"
    },
    {
      "name": "Pakistan",
      "code": "PK"
    },
    {
      "name": "Palau",
      "code": "PW"
    },
    {
      "name": "Palestine, State of",
      "code": "PS"
    },
    {
      "name": "Panama",
      "code": "PA"
    },
    {
      "name": "Papua New Guinea",
      "code": "PG"
    },
    {
      "name": "Paraguay",
      "code": "PY"
    },
    {
      "name": "Peru",
      "code": "PE"
    },
    {
      "name": "Philippines",
      "code": "PH"
    },
    {
      "name": "Pitcairn",
      "code": "PN"
    },
    {
      "name": "Poland",
      "code": "PL"
    },
    {
      "name": "Portugal",
      "code": "PT"
    },
    {
      "name": "Puerto Rico",
      "code": "PR"
    },
    {
      "name": "Qatar",
      "code": "QA"
    },
    {
      "name": "Réunion",
      "code": "RE"
    },
    {
      "name": "Romania",
      "code": "RO"
    },
    {
      "name": "Russian Federation",
      "code": "RU"
    },
    {
      "name": "Rwanda",
      "code": "RW"
    },
    {
      "name": "Saint Barthélemy",
      "code": "BL"
    },
    {
      "name": "Saint Helena, Ascension and Tristan da Cunha",
      "code": "SH"
    },
    {
      "name": "Saint Kitts and Nevis",
      "code": "KN"
    },
    {
      "name": "Saint Lucia",
      "code": "LC"
    },
    {
      "name": "Saint Martin (French part)",
      "code": "MF"
    },
    {
      "name": "Saint Pierre and Miquelon",
      "code": "PM"
    },
    {
      "name": "Saint Vincent and the Grenadines",
      "code": "VC"
    },
    {
      "name": "Samoa",
      "code": "WS"
    },
    {
      "name": "San Marino",
      "code": "SM"
    },
    {
      "name": "Sao Tome and Principe",
      "code": "ST"
    },
    {
      "name": "Saudi Arabia",
      "code": "SA"
    },
    {
      "name": "Senegal",
      "code": "SN"
    },
    {
      "name": "Serbia",
      "code": "RS"
    },
    {
      "name": "Seychelles",
      "code": "SC"
    },
    {
      "name": "Sierra Leone",
      "code": "SL"
    },
    {
      "name": "Singapore",
      "code": "SG"
    },
    {
      "name": "Sint Maarten (Dutch part)",
      "code": "SX"
    },
    {
      "name": "Slovakia",
      "code": "SK"
    },
    {
      "name": "Slovenia",
      "code": "SI"
    },
    {
      "name": "Solomon Islands",
      "code": "SB"
    },
    {
      "name": "Somalia",
      "code": "SO"
    },
    {
      "name": "South Africa",
      "code": "ZA"
    },
    {
      "name": "South Georgia and the South Sandwich Islands",
      "code": "GS"
    },
    {
      "name": "South Sudan",
      "code": "SS"
    },
    {
      "name": "Spain",
      "code": "ES"
    },
    {
      "name": "Sri Lanka",
      "code": "LK"
    },
    {
      "name": "Sudan",
      "code": "SD"
    },
    {
      "name": "Suriname",
      "code": "SR"
    },
    {
      "name": "Svalbard and Jan Mayen",
      "code": "SJ"
    },
    {
      "name": "Swaziland",
      "code": "SZ"
    },
    {
      "name": "Sweden",
      "code": "SE"
    },
    {
      "name": "Switzerland",
      "code": "CH"
    },
    {
      "name": "Syrian Arab Republic",
      "code": "SY"
    },
    {
      "name": "Taiwan",
      "code": "TW"
    },
    {
      "name": "Tajikistan",
      "code": "TJ"
    },
    {
      "name": "Tanzania, United Republic of",
      "code": "TZ"
    },
    {
      "name": "Thailand",
      "code": "TH"
    },
    {
      "name": "Timor-Leste",
      "code": "TL"
    },
    {
      "name": "Togo",
      "code": "TG"
    },
    {
      "name": "Tokelau",
      "code": "TK"
    },
    {
      "name": "Tonga",
      "code": "TO"
    },
    {
      "name": "Trinidad and Tobago",
      "code": "TT"
    },
    {
      "name": "Tunisia",
      "code": "TN"
    },
    {
      "name": "Turkey",
      "code": "TR"
    },
    {
      "name": "Turkmenistan",
      "code": "TM"
    },
    {
      "name": "Turks and Caicos Islands",
      "code": "TC"
    },
    {
      "name": "Tuvalu",
      "code": "TV"
    },
    {
      "name": "Uganda",
      "code": "UG"
    },
    {
      "name": "Ukraine",
      "code": "UA"
    },
    {
      "name": "United Arab Emirates",
      "code": "AE"
    },
    {
      "name": "United Kingdom",
      "code": "GB"
    },
    {
      "name": "United States",
      "code": "US"
    },
    {
      "name": "United States Minor Outlying Islands",
      "code": "UM"
    },
    {
      "name": "Uruguay",
      "code": "UY"
    },
    {
      "name": "Uzbekistan",
      "code": "UZ"
    },
    {
      "name": "Vanuatu",
      "code": "VU"
    },
    {
      "name": "Venezuela, Bolivarian Republic of",
      "code": "VE"
    },
    {
      "name": "Viet Nam",
      "code": "VN"
    },
    {
      "name": "Virgin Islands, British",
      "code": "VG"
    },
    {
      "name": "Virgin Islands, U.S.",
      "code": "VI"
    },
    {
      "name": "Wallis and Futuna",
      "code": "WF"
    },
    {
      "name": "Western Sahara",
      "code": "EH"
    },
    {
      "name": "Yemen",
      "code": "YE"
    },
    {
      "name": "Zambia",
      "code": "ZM"
    },
    {
      "name": "Zimbabwe",
      "code": "ZW"
    }
  ],
  "pusher": {
    "cluster": "",
    "key": "e193315333a104c232be"
  },
  "group": {
    "class_name": {
      "length": {
        "min": 3,
        "max": 60
      }
    },
    "name": {
      "length": {
        "min": 3,
        "max": 10
      }
    }
  },
  "signup_tutorial": {
    "sms": "{{group_code}}\n\nHit send to subscribe to your class",
    "email": {
      "subject": "Just press send!",
      "body": {
        "text": "This email subscribes you to your class notifications on Remind"
      }
    }
  },
  "languages": {
    "primary": {
      "en": "English",
      "es": "Spanish",
      "zh": "Chinese",
      "fr": "French",
      "pt": "Portuguese"
    },
    "secondary": {
      "af": "Afrikaans",
      "sq": "Albanian",
      "ar": "Arabic",
      "hy": "Armenian",
      "az": "Azerbaijani",
      "eu": "Basque",
      "be": "Belarusian",
      "bn": "Bengali",
      "bs": "Bosnian",
      "bg": "Bulgarian",
      "ca": "Catalan",
      "ny": "Chichewa",
      "zh": "Chinese",
      "hr": "Croatian",
      "cs": "Czech",
      "da": "Danish",
      "nl": "Dutch",
      "en": "English",
      "eo": "Esperanto",
      "et": "Estonian",
      "tl": "Filipino",
      "fi": "Finnish",
      "fr": "French",
      "gl": "Galician",
      "ka": "Georgian",
      "de": "German",
      "el": "Greek",
      "gu": "Gujarati",
      "ht": "Haitian Creole",
      "ha": "Hausa",
      "he": "Hebrew",
      "hi": "Hindi",
      "hu": "Hungarian",
      "is": "Icelandic",
      "id": "Indonesian",
      "ga": "Irish",
      "it": "Italian",
      "ja": "Japanese",
      "jv": "Javanese",
      "kn": "Kannada",
      "kk": "Kazakh",
      "km": "Khmer",
      "ko": "Korean",
      "la": "Latin",
      "lo": "Lao",
      "lt": "Lithuanian",
      "lv": "Latvian",
      "mk": "Macedonian",
      "mg": "Malagasy",
      "ms": "Malay",
      "ml": "Malayalam",
      "mt": "Maltese",
      "mi": "Māori",
      "mr": "Marathi",
      "mn": "Mongolian",
      "ne": "Nepali",
      "no": "Norwegian",
      "fa": "Persian",
      "pl": "Polish",
      "pt": "Portuguese",
      "ro": "Romanian",
      "ru": "Russian",
      "sr": "Serbian",
      "si": "Sinhala",
      "sk": "Slovak",
      "sl": "Slovenian",
      "so": "Somali",
      "es": "Spanish",
      "su": "Sundanese",
      "sw": "Swahili",
      "sv": "Swedish",
      "tg": "Tajik",
      "ta": "Tamil",
      "te": "Telugu",
      "th": "Thai",
      "tr": "Turkish",
      "uk": "Ukrainian",
      "ur": "Urdu",
      "uz": "Uzbek",
      "vi": "Vietnamese",
      "cy": "Welsh",
      "yi": "Yiddish",
      "yo": "Yoruba",
      "zu": "Zulu"
    }
  },
  "composer": {
    "activity_regex": "([$])|(\\bpay\\b)|(\\br(.?)s(.?)v(.?)p(.?)\\b)|(\\bfield trip(s?)\\b)|(\\bfundraiser(s?)\\b)|(\\bfundraising(s?)\\b)|(\\bfee(s?)\\b)|(\\bcost(s?)\\b)|(\\bparty\\b)|(\\bparties\\b)|(\\bpayment(s?)\\b)|(\\bexpense(s?)\\b)|(\\bdollar(s?)\\b)|(\\bbuy\\b)|(\\bpurchase(s?)\\b)|(\\bmoney\\b)|(\\bcash\\b)|(\\bcredit\\b)|(\\bcard\\b)|(\\bcheckbook(s?)\\b)|(\\bevent(s?)\\b)|(\\btournament(s?)\\b)|(\\bcalendar(s?)\\b)|(\\bfiesta(s?)\\b)|(\\bfete(s?)\\b)|(\\bfête(s?)\\b)|(\\bcelebration(s?)\\b)|(\\boffice hour(s?)\\b)|(\\bsession(s?)\\b)|(\\bconference(s?)\\b)|(\\bback to school night\\b)|(\\bscience fair\\b)|(\\bschool play(s?)\\b)|(\\bhalloween parade\\b)|(\\bbirthday party\\b)|(\\bteam dinner\\b)|(\\bhappy hour(s?)\\b)|(\\binfo session(s?)\\b)|(\\btrip\\b)|(\\bopen house\\b)|(\\bactivity\\b)|(\\bticket(s?)\\b)|(\\bpizza\\b)|(\\bvolunteer\\b)"
  },
  "services": {
    "batphone": "+16145048864"
  }
};

describe('createSchemaFromJSON', function() {
	it('handles simple json', function() {
		expect(createSchemaFromJSON(simpleJson)).toMatchSnapshot();
	});

	it('handles huge json', function() {
		expect(createSchemaFromJSON(hugeJson)).toMatchSnapshot();
	});
});
