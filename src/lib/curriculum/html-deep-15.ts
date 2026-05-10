import type { Chapter } from "./types";

export const htmlCh15: Chapter = {
  id: "html-ch-15",
  number: 15,
  title: "Audio and Video",
  subtitle: "Native media without plugins — controls, formats, accessibility, and the gotchas that bite everyone.",
  difficulty: "Intermediate",
  estimatedMinutes: 35,
  xpReward: 120,
  prerequisites: ["html-ch-14"],
  partLabel: "Part 3: Media & Embeds",
  learningObjectives: [
    "Embed audio and video that plays reliably across browsers.",
    "Provide multiple sources so the browser picks a format it supports.",
    "Use attributes like controls, autoplay, muted, loop, preload correctly.",
    "Add captions with the <track> element for accessibility.",
    "Avoid the autoplay traps that make sites feel hostile.",
  ],
  sections: [
    {
      id: "html15-s1",
      title: "Why Native Media Won",
      whyItMatters: "Before HTML5, video meant Flash. Flash meant security holes, battery drain, and zero iPhone support. The <video> and <audio> elements killed Flash by giving the browser everything it needed natively.",
      realWorldAnalogy: "Native <video> is like a built-in cup holder in your car. The pre-HTML5 way was duct-taping a Big Gulp to the dashboard with Flash.",
      content: `Two elements cover almost everything: \`<audio>\` and \`<video>\`. Both work the same way — point them at a media file, give the user controls, and the browser handles decoding, buffering, and playback.

The simplest possible video:

\`\`\`
<video src="movie.mp4" controls></video>
\`\`\`

That's it — a real video player, scrubber bar, fullscreen, volume, all built in. The same shape works for audio:

\`\`\`
<audio src="song.mp3" controls></audio>
\`\`\`

Without \`controls\` the player is invisible — useful for background loops, hostile for everything else.`,
      callouts: [
        { type: "warning", title: "Always size videos", content: "Set width/height (or CSS aspect-ratio) so the page doesn't jump when the video loads. Layout shift kills your Core Web Vitals score." },
      ],
    },
    {
      id: "html15-s2",
      title: "Multiple Sources & Formats",
      whyItMatters: "There is no single video format every browser supports perfectly. MP4 (H.264) is the most universal but not free; WebM is open but Safari support is patchy. Provide both and let the browser choose.",
      content: `Use \`<source>\` children instead of the \`src\` attribute when you want fallbacks:

\`\`\`
<video controls width="640" poster="thumb.jpg">
  <source src="movie.webm" type="video/webm">
  <source src="movie.mp4" type="video/mp4">
  Sorry, your browser doesn't support embedded video.
</video>
\`\`\`

The browser walks the list top-to-bottom and uses the **first** \`<source>\` it can play. The text after the sources is the fallback when nothing works.

The \`poster\` attribute shows a still image until the user hits play — without it you get an ugly black rectangle.`,
      codeExamples: [{
        id: "html15-ex1",
        title: "Audio with fallback text",
        description: "An audio element with two formats and a download fallback.",
        code: { html: `<audio controls preload="metadata">
  <source src="podcast.ogg" type="audio/ogg">
  <source src="podcast.mp3" type="audio/mpeg">
  Your browser can't play audio.
  <a href="podcast.mp3">Download the episode</a>
</audio>` },
        explanation: "preload=\"metadata\" tells the browser to fetch only enough to know the duration — saves bandwidth for users who never press play.",
        tryItPrompt: "Add a third <source> for a fictional .opus file at the top.",
      }],
    },
    {
      id: "html15-s3",
      title: "Attributes That Matter",
      whyItMatters: "The handful of boolean attributes on <video> determine whether your media feels professional or annoying. Get them wrong and browsers will silently refuse to play your video.",
      content: `The full attribute set:

- **controls** — show the native UI. Almost always include this.
- **autoplay** — start playing immediately. Browsers **block this unless the video is also muted**. Mobile is even stricter.
- **muted** — start with no sound. Required for autoplay to work.
- **loop** — restart when finished. Great for background hero videos.
- **playsinline** — on iOS, play in the page instead of forcing fullscreen. Always include for inline videos.
- **preload** — \`none\`, \`metadata\`, or \`auto\`. Default is \`metadata\`.
- **poster** — image shown before play.

The "silent autoplay loop" pattern for hero videos is so common it has a name:

\`\`\`
<video autoplay muted loop playsinline poster="hero.jpg">
  <source src="hero.mp4" type="video/mp4">
</video>
\`\`\``,
      callouts: [
        { type: "common-mistake", title: "Autoplay with sound", content: "Chrome, Safari, and Firefox all block it. Your video will appear paused and you'll spend an hour debugging — when the fix is just adding the muted attribute." },
        { type: "pro-tip", title: "Use poster aggressively", content: "A poster image loads instantly. The video file might take seconds. A good poster makes the page feel fast even on slow connections." },
      ],
    },
    {
      id: "html15-s4",
      title: "Captions with <track>",
      whyItMatters: "Roughly 1 in 6 people have some hearing loss. Many more watch video on muted commutes. Captions aren't optional in 2026 — they're how your video gets watched at all.",
      content: `The \`<track>\` element adds subtitle/caption files in WebVTT format (.vtt):

\`\`\`
<video controls>
  <source src="lecture.mp4" type="video/mp4">
  <track kind="captions" src="lecture-en.vtt" srclang="en" label="English" default>
  <track kind="captions" src="lecture-es.vtt" srclang="es" label="Español">
</video>
\`\`\`

A WebVTT file is plain text:

\`\`\`
WEBVTT

00:00:01.000 --> 00:00:04.000
Welcome to the show.

00:00:04.500 --> 00:00:07.200
Today we're talking about HTML.
\`\`\`

\`kind\` can be \`captions\` (deaf/HoH), \`subtitles\` (translation), \`descriptions\` (audio description), or \`chapters\`.`,
      microExercise: {
        instruction: "Build a video player with a poster, English captions on by default, and the silent-autoplay-loop pattern.",
        starterCode: { html: `<video controls>\n  <source src="clip.mp4" type="video/mp4">\n</video>` },
        hint: "You'll need autoplay, muted, loop, playsinline, poster, and a <track kind=\"captions\" default> child.",
        solution: { html: `<video autoplay muted loop playsinline poster="thumb.jpg" controls>\n  <source src="clip.mp4" type="video/mp4">\n  <track kind="captions" src="clip-en.vtt" srclang="en" label="English" default>\n</video>` },
      },
      deepDive: "Behind the scenes the browser uses the Media Source Extensions API and may switch between codecs based on bandwidth. Streaming services use HLS or DASH manifests instead of single files — but those still wrap the same <video> element.",
    },
  ],
  exercises: [
    {
      id: "html15-ex1",
      title: "Hero background video",
      difficulty: 1,
      description: "Build a silent autoplay hero video with a poster fallback.",
      requirements: ["Use <video> with autoplay, muted, loop, playsinline", "Include a poster image", "Provide both .webm and .mp4 sources"],
      starterCode: { html: `<section style="height:300px">\n  <!-- video here -->\n</section>` },
      hints: ["autoplay needs muted to actually play", "playsinline is essential for iOS", "First <source> the browser supports wins"],
      solution: { html: `<section style="height:300px">\n  <video autoplay muted loop playsinline poster="hero.jpg" style="width:100%;height:100%;object-fit:cover">\n    <source src="hero.webm" type="video/webm">\n    <source src="hero.mp4" type="video/mp4">\n  </video>\n</section>` },
      solutionExplanation: "object-fit:cover makes the video fill the section like a background image. The four boolean attributes together create the silent-loop pattern that browsers permit.",
    },
    {
      id: "html15-ex2",
      title: "Accessible podcast player",
      difficulty: 2,
      description: "Embed an audio episode with download fallback and a transcript link.",
      requirements: ["Show native controls", "Include preload=\"metadata\"", "Provide an <a> download fallback inside the element", "Add a visible link to a transcript page"],
      starterCode: { html: `<article>\n  <h2>Episode 42</h2>\n  <!-- audio here -->\n</article>` },
      hints: ["preload=\"metadata\" is good for podcasts — fetches only duration", "Fallback text inside <audio> shows when unsupported", "Transcripts go OUTSIDE the audio element as a normal link"],
      solution: { html: `<article>\n  <h2>Episode 42</h2>\n  <audio controls preload="metadata">\n    <source src="ep42.mp3" type="audio/mpeg">\n    <a href="ep42.mp3">Download episode</a>\n  </audio>\n  <p><a href="ep42-transcript.html">Read the full transcript</a></p>\n</article>` },
      solutionExplanation: "Podcasts benefit from metadata preload — long files don't fetch megabytes until the user actually presses play. Transcripts make audio searchable and accessible to deaf users.",
    },
    {
      id: "html15-ex3",
      title: "Multilingual lecture video",
      difficulty: 3,
      description: "Build a lecture player with English and Spanish captions, controls, and a chapter track.",
      requirements: ["Use <video> with controls and a poster", "Provide MP4 source", "Add three <track> elements: English captions (default), Spanish captions, and chapters"],
      starterCode: { html: `<video controls width="720">\n  <!-- sources and tracks here -->\n</video>` },
      hints: ["track kind can be 'captions', 'subtitles', or 'chapters'", "default goes on exactly one track", "srclang is a 2-letter ISO code"],
      solution: { html: `<video controls width="720" poster="lecture.jpg">\n  <source src="lecture.mp4" type="video/mp4">\n  <track kind="captions" src="en.vtt" srclang="en" label="English" default>\n  <track kind="captions" src="es.vtt" srclang="es" label="Español">\n  <track kind="chapters" src="chapters.vtt" srclang="en" label="Chapters">\n</video>` },
      solutionExplanation: "Each language gets its own track. The chapter track lets the browser show jump points in the timeline. Only one default — the user can switch from the controls.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "html15-q1", type: "mcq", question: "Why does autoplay video often appear paused?", options: ["The browser is broken", "Browsers block autoplay unless the video is muted", "MP4 isn't supported", "Autoplay was removed from HTML"], correctAnswer: 1, explanation: "Modern browsers block sound from playing without user interaction. Add the muted attribute and autoplay works.", difficulty: 1 },
      { id: "html15-q2", type: "mcq", question: "What attribute prevents iOS from forcing video into fullscreen?", options: ["inline", "playsinline", "embed", "fullscreen=false"], correctAnswer: 1, explanation: "playsinline keeps the video playing in the page on iOS Safari.", difficulty: 1 },
      { id: "html15-q3", type: "mcq", question: "Which <track> kind is for deaf/hard-of-hearing users?", options: ["subtitles", "descriptions", "captions", "chapters"], correctAnswer: 2, explanation: "captions transcribe dialog AND non-speech sounds. subtitles assume you can hear and just need translation.", difficulty: 2 },
      { id: "html15-q4", type: "true-false", question: "preload=\"none\" tells the browser to fetch nothing until the user presses play.", options: ["True", "False"], correctAnswer: 0, explanation: "Useful for pages with many videos where most won't be played.", difficulty: 1 },
      { id: "html15-q5", type: "spot-the-bug", question: "What's wrong here?", code: `<video autoplay controls>\n  <source src="ad.mp4" type="video/mp4">\n</video>`, options: ["Missing src", "autoplay without muted will be blocked", "controls is misspelled", "Nothing is wrong"], correctAnswer: 1, explanation: "Add muted (and ideally playsinline) for autoplay to work in any modern browser.", difficulty: 2 },
    ],
  },
  cheatSheet: [
    { label: "Basic video", value: '<video src="x.mp4" controls></video>' },
    { label: "Multiple sources", value: '<video controls><source src="x.webm" type="video/webm"><source src="x.mp4" type="video/mp4"></video>' },
    { label: "Hero loop", value: 'autoplay muted loop playsinline' },
    { label: "Captions", value: '<track kind="captions" src="en.vtt" srclang="en" default>' },
    { label: "Preload options", value: 'none | metadata | auto' },
    { label: "Poster", value: 'poster="thumb.jpg"' },
  ],
};
