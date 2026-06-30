#!/usr/bin/env bash
set -e
BASE="https://storage.ko-fi.com/cdn/landing_assets"
OUT="public/assets"
mkdir -p "$OUT"

dl() { # url  dest
  echo "  $2"
  curl -sf -A "Mozilla/5.0" "$1" -o "$OUT/$2"
}

CAT="quality=auto&size=60w60h&format=webp"
CR="quality=auto&size=500w500h&format=webp"

# Category icons
dl "$BASE/streamer.png?$CAT"       cat-streamers.webp
dl "$BASE/artists.png?$CAT"        cat-artists.webp
dl "$BASE/writer.png?$CAT"         cat-writers.webp
dl "$BASE/crafter.png?$CAT"        cat-crafters.webp
dl "$BASE/podcaster.png?$CAT"      cat-podcasters.webp
dl "$BASE/video-creator.png?$CAT"  cat-video.webp
dl "$BASE/cosplayer.png?$CAT"      cat-cosplayers.webp
dl "$BASE/musician.png?$CAT"       cat-musicians.webp
dl "$BASE/developer.png?$CAT"      cat-developers.webp
dl "$BASE/community.png?$CAT"      cat-communities.webp

# Characters
dl "$BASE/marching_thumbnail.png?quality=auto"  hero-characters.png
dl "$BASE/kofistory_character.png?quality=auto" story-character.png
dl "$BASE/faq_character.png"                    faq-character.png
dl "$BASE/footer_character.png?quality=auto"    footer-character.png

# Creators
H="$BASE/kofi-home/home-page-creators"
dl "$H/streamer_01.png?$CR"  drakoniques.webp
dl "$H/streamer_03.png?$CR"  peterwebby.webp
dl "$H/streamer_02.png?$CR"  shenanjegans.webp
dl "$BASE/creator_assets/artist_lucracia.png?$CR"            lucracia.webp
dl "$H/artist_02.png?$CR"                                    lees-photography.webp
dl "$BASE/creator_assets/update_2025/artist_joebrushset.png?$CR" joe-lillington.webp
dl "$BASE/creator_assets/update_2025/writer_clairegcoleman.png?$CR" clairegcoleman.webp
dl "$H/q1_2025/writer_01_q1_2025.png?$CR"                    ligianunes.webp
dl "$H/writer_02.png?$CR"                                    bjorn-larssen.webp
dl "$H/crafter_01.png?$CR"                                   nixs-glass.webp
dl "$H/crafter_02.png?$CR"                                   rolling-yarn.webp
dl "$H/q1_2025/craft_01_q1_2025.png?$CR"                     mystic-reflections.webp
dl "$BASE/creator_assets/update_2025/podcast_greyhistory.png?$CR" grey-history.webp
dl "$H/q1_2025/podcast_01_q1_2025.png?$CR"                   geekshock.webp
dl "$H/podcast_02.png?$CR"                                   exploding-heads.webp
dl "$BASE/creator_assets/update_2025/video_livingtheskyelife.png?$CR" livingtheskyelife.webp
dl "$H/video_03.png?$CR"                                     daniel-and-yuka.webp
dl "$H/video_02.png?$CR"                                     pilates-mat.webp
dl "$H/cosplay_01.png?$CR"                                   yarn-goddess.webp
dl "$H/cosplay_02.png?$CR"                                   bastian-kerk.webp
dl "$H/q1_2025/cosplay_01_q1_2025.png?$CR"                   charybdis-studio.webp
dl "$H/musician_03.png?$CR"                                  colin-hendra.webp
dl "$H/musician_02.png?$CR"                                  amy-shafer.webp
dl "$H/q1_2025/music_01_q1_2025.png?$CR"                     coffee-run.webp
dl "$H/dev_02.png?$CR"                                       wonderful-elephant.webp
dl "$BASE/creator_assets/update_2025/developer_amp3.png?$CR" amp3.webp
dl "$H/dev_01.png?$CR"                                       balmut.webp
dl "$H/q1_2025/community_01_q1_2025.png?$CR"                 disabled-hairy-friends.webp
dl "$H/community_02.png?$CR"                                 streampunks.webp
dl "$H/community_01.png?$CR"                                 theatre-of-science.webp

echo "Done. $(ls -1 $OUT | wc -l) files."
