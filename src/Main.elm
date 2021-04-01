module Main exposing (..)

import Browser
import Html exposing (Html, a, div, input)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)



-- MAIN


main =
    Browser.sandbox { init = init, update = update, view = view }



-- MODEL


type alias Model =
    { content : String
    , links : List Link
    }


type alias Link =
    { icon : String
    , link : String
    }


init : Model
init =
    { content = ""
    , links =
        [ { link = "https://github.com/", icon = "fab fa-github" }
        , { link = "https://gitlab.com/", icon = "fab fa-gitlab" }
        , { link = "https://facebook.com/", icon = "fab fa-facebook" }
        , { link = "https://messenger.com/", icon = "fab fa-facebook-messenger" }
        , { link = "https://linkedin.com/", icon = "fab fa-linkedin" }
        , { link = "https://outlook.live.com/owa/?path=/mail/inbox", icon = "fa fa-envelope" }
        , { link = "https://youtube.com/", icon = "fab fa-youtube" }
        , { link = "https://twitch.tv/directory", icon = "fab fa-twitch" }
        , { link = "https://smile.amazon.co.uk/", icon = "fab fa-amazon" }
        , { link = "https://reddit.com/", icon = "fab fa-reddit" }
        , { link = "https://dropbox.com/", icon = "fab fa-dropbox" }
        , { link = "https://drive.google.com/drive/my-drive", icon = "fab fa-google-drive" }
        , { link = "https://bitbucket.org/", icon = "fab fa-bitbucket" }
        , { link = "https://netflix.com/", icon = "fa fa-play" }
        , { link = "https://humblebundle.com/", icon = "fa fa-shopping-bag" }
        , { link = "https://app.plex.tv/desktop", icon = "fa fa-tv" }
        , { link = "https://spotify.com/", icon = "fab fa-spotify" }
        ]
    }



-- UPDATE


type Msg
    = Change String



update : Msg -> Model -> Model
update msg model =
    case msg of
        Change newContent ->
            { model | content = newContent }



-- VIEW


view : Model -> Html Msg
view model =
    div
        [ class "App topmargin"
        ]
        [ div [] (List.map (\link -> a [ href link.link, class "fa-4x", class link.icon ] []) model.links)
        , input
            [ placeholder "Search"
            , value model.content
            , onInput Change
            , id "searchbar"
            , class "carousel topmargin"
            , autofocus True
            ]
            []
        ]
