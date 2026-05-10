import type { Chapter } from "./types";

// ============================================================================
// HTML CHAPTER 10 — Forms Part 2: Selections, Toggles, and Multi-line Input
// ============================================================================
export const htmlCh10: Chapter = {
  id: "html-ch-10",
  number: 10,
  title: "Forms — Part 2: Choices, Toggles & Textareas",
  subtitle: "Checkboxes, radio buttons, dropdowns, and multi-line text — the controls that let users pick.",
  difficulty: "Beginner",
  estimatedMinutes: 35,
  xpReward: 110,
  prerequisites: ["html-ch-09"],
  partLabel: "Part 2: Structure & Layout",
  learningObjectives: [
    "Build accessible groups of checkboxes and radio buttons.",
    "Construct <select> dropdowns with optgroup organization.",
    "Use <textarea> for multi-line input with sensible defaults.",
    "Understand the difference between `name` and `id` and why both matter on submission.",
    "Pre-select values and remember why disabled vs readonly matters.",
  ],
  sections: [
    {
      id: "html10-s1",
      title: "Checkboxes — Independent Yes/No Choices",
      whyItMatters: "Every 'I agree to terms', every multi-select filter, every email-preference panel uses checkboxes. They're the most flexible choice control in HTML, but the API is full of small traps.",
      realWorldAnalogy: "A checkbox is like a light switch on a wall. Each switch is independent — flipping the kitchen light has nothing to do with the bedroom light.",
      content: `A checkbox is created with \`<input type="checkbox">\`. Each checkbox is independent — the user can check zero, one, or many of them.

The crucial parts of a checkbox:

- **\`name\`** — the key that gets submitted to the server.
- **\`value\`** — what gets submitted *if* the box is checked. If you omit \`value\`, the browser submits the literal string "on", which is almost never what you want.
- **\`checked\`** — a boolean attribute. Adding it (with or without a value) pre-selects the box.
- **A connected \`<label>\`** — clicking the label should also toggle the box. Either wrap the input or use \`for=""\`.

The most common mistake is forgetting \`value\`. Without it, a server receiving five checked boxes named "interests" will see five values of "on" — useless.

Group multiple checkboxes by giving them the **same \`name\`** with **different \`value\`**s. The browser will send each checked one as a separate field with the same name, which most server frameworks parse into an array.

\`\`\`
<fieldset>
  <legend>Pick your interests</legend>
  <label><input type="checkbox" name="interests" value="music"> Music</label>
  <label><input type="checkbox" name="interests" value="sports"> Sports</label>
  <label><input type="checkbox" name="interests" value="reading" checked> Reading</label>
</fieldset>
\`\`\`

Notice the \`<fieldset>\` and \`<legend>\` — they're the semantic way to group related controls. Screen readers announce the legend before each control inside, so a user hears "Pick your interests, Music, checkbox" instead of just "Music, checkbox".`,
      callouts: [
        { type: "common-mistake", title: "Always set value", content: "An <input type='checkbox'> without a value submits 'on' when checked. Always include value='something-meaningful'." },
        { type: "tip", title: "Wrap or for=", content: "Either <label><input ...> Text</label> or <label for='x'>Text</label><input id='x'>. Both make the label clickable. Pick one and stay consistent." },
      ],
      codeExamples: [
        {
          id: "html10-s1-ex1",
          title: "A multi-checkbox preference panel",
          description: "Users can pick zero or many interests. Note the shared name and unique values.",
          code: {
            html: `<form>\n  <fieldset>\n    <legend>Newsletter topics</legend>\n    <label><input type="checkbox" name="topics" value="design"> Design</label><br>\n    <label><input type="checkbox" name="topics" value="dev" checked> Development</label><br>\n    <label><input type="checkbox" name="topics" value="career"> Career advice</label>\n  </fieldset>\n  <button type="submit">Save</button>\n</form>`,
          },
          explanation: "Three independent checkboxes share the name 'topics'. Whichever ones are checked get submitted with their value. 'Development' is pre-selected via the `checked` attribute.",
          tryItPrompt: "Add a fourth checkbox for 'Open Source' and pre-check it.",
        },
      ],
      microExercise: {
        instruction: "Create a fieldset with three checkboxes named 'pizza' for 'cheese', 'pepperoni', and 'mushrooms'. Pre-check cheese.",
        starterCode: { html: `<form>\n  <!-- write your fieldset here -->\n</form>` },
        hint: "Use <fieldset><legend>Toppings</legend>...</fieldset> and three labels each wrapping a checkbox with the same name='pizza'.",
        solution: { html: `<form>\n  <fieldset>\n    <legend>Toppings</legend>\n    <label><input type="checkbox" name="pizza" value="cheese" checked> Cheese</label><br>\n    <label><input type="checkbox" name="pizza" value="pepperoni"> Pepperoni</label><br>\n    <label><input type="checkbox" name="pizza" value="mushrooms"> Mushrooms</label>\n  </fieldset>\n</form>` },
      },
    },
    {
      id: "html10-s2",
      title: "Radio Buttons — Pick Exactly One",
      whyItMatters: "Radio buttons enforce a 'one-of-many' choice. Use them whenever there's a single correct answer (gender on a form, payment method, plan tier).",
      realWorldAnalogy: "Old car radios had physical buttons — pressing one popped the others out. You couldn't tune to two stations at once. That's where the name comes from.",
      content: `Radio buttons use \`<input type="radio">\`. Like checkboxes, they need a \`name\` and a \`value\`. **The grouping happens via the \`name\` attribute** — every radio button with the same name belongs to one group, and the browser will let the user select only one at a time.

This is the most common bug for new developers: if you forget to give the radios the same name, they all become independent, and the user can select all of them. If you give two unrelated radios the same name, they accidentally fight each other.

\`\`\`
<fieldset>
  <legend>Choose a plan</legend>
  <label><input type="radio" name="plan" value="free"> Free</label>
  <label><input type="radio" name="plan" value="pro" checked> Pro</label>
  <label><input type="radio" name="plan" value="team"> Team</label>
</fieldset>
\`\`\`

A few important details:

- **You should usually pre-select one** with \`checked\`. Leaving them all blank forces the user to make a choice from scratch — fine if you want that explicit decision, bad if there's an obvious default.
- **Radio buttons cannot be unchecked by clicking again.** Once one in the group is selected, the only way to "deselect" is to pick another or reset the form. If you need an uncheckable yes/no, use a checkbox.
- **The submitted value is just \`name=value\`**, not an array — exactly one value per group.`,
      callouts: [
        { type: "warning", title: "The name is the group", content: "Radios with different names are different groups. Same name = same group. This is the most-missed rule by beginners." },
        { type: "common-mistake", title: "No default selected", content: "Forms with no default selected radio require an explicit user click. Add `checked` to whichever option should be default unless you specifically need a forced choice." },
      ],
      codeExamples: [
        {
          id: "html10-s2-ex1",
          title: "Plan selector",
          description: "Three plans, exactly one selectable, Pro pre-selected.",
          code: {
            html: `<form>\n  <fieldset>\n    <legend>Choose your plan</legend>\n    <label><input type="radio" name="plan" value="free"> Free — $0/mo</label><br>\n    <label><input type="radio" name="plan" value="pro" checked> Pro — $9/mo</label><br>\n    <label><input type="radio" name="plan" value="team"> Team — $29/mo</label>\n  </fieldset>\n</form>`,
          },
          explanation: "Three radios share the name 'plan'. The browser enforces single-selection. The pre-selected option becomes the default.",
          tryItPrompt: "Add a fourth radio for 'Enterprise — Contact us' and remove the `checked` from Pro.",
        },
      ],
    },
    {
      id: "html10-s3",
      title: "Dropdowns with <select> and <option>",
      whyItMatters: "When you have more than ~5 options, radio buttons get visually heavy. Dropdowns scale to dozens or hundreds of options without taking screen space.",
      content: `A dropdown is built from \`<select>\` (the container) and \`<option>\` (each choice).

\`\`\`
<label for="country">Country</label>
<select id="country" name="country">
  <option value="">— Pick one —</option>
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="uk">United Kingdom</option>
  <option value="jp" selected>Japan</option>
</select>
\`\`\`

Important details:

- The \`value\` of \`<option>\` is what gets submitted. The text between the tags is what the user sees. They're often different — short codes for the server, friendly labels for humans.
- An \`<option>\` without a \`value\` submits its text content. Be explicit and always set \`value\`.
- **\`selected\`** on an option pre-selects it (only one allowed; if you set selected on multiple, the browser uses the last one).
- A common pattern is to add a placeholder option with \`value=""\` and \`disabled selected\`. The empty value lets your form-validation logic detect "nothing chosen".

**\`<optgroup>\`** lets you group options under a non-selectable header — great for long lists like countries grouped by continent:

\`\`\`
<select name="city">
  <optgroup label="Europe">
    <option value="par">Paris</option>
    <option value="lon">London</option>
  </optgroup>
  <optgroup label="Asia">
    <option value="tyo">Tokyo</option>
    <option value="sgn">Saigon</option>
  </optgroup>
</select>
\`\`\`

**Multi-select dropdowns** add the \`multiple\` attribute. The browser shows a list box instead of a dropdown, and the user holds Ctrl/Cmd to pick several. The form submits one entry per selected option:

\`\`\`
<select name="skills" multiple size="5">
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="js">JavaScript</option>
</select>
\`\`\`

In practice, \`multiple\` selects have terrible UX — users don't know to Ctrl-click. Most modern apps replace them with a custom multi-checkbox UI. Stick to the native control only when the audience is technical.`,
      callouts: [
        { type: "tip", title: "Placeholder option", content: "Use <option value='' disabled selected>Pick one</option> at the top to force a deliberate choice and let your validation detect 'nothing selected'." },
        { type: "pro-tip", title: "Long lists", content: "If you have hundreds of options (countries, ZIP codes), consider a searchable combobox built with JS. Native <select> doesn't filter as you type." },
      ],
      codeExamples: [
        {
          id: "html10-s3-ex1",
          title: "Grouped country selector",
          description: "Optgroups make a long list scannable.",
          code: {
            html: `<form>\n  <label for="city">City</label><br>\n  <select id="city" name="city">\n    <option value="" disabled selected>— Pick a city —</option>\n    <optgroup label="North America">\n      <option value="nyc">New York</option>\n      <option value="sfo">San Francisco</option>\n      <option value="yyz">Toronto</option>\n    </optgroup>\n    <optgroup label="Europe">\n      <option value="lon">London</option>\n      <option value="par">Paris</option>\n      <option value="ber">Berlin</option>\n    </optgroup>\n  </select>\n</form>`,
          },
          explanation: "Two optgroups organize cities by continent. The placeholder option is disabled so users can't re-select it accidentally.",
          tryItPrompt: "Add an Asia optgroup with Tokyo and Singapore.",
        },
      ],
    },
    {
      id: "html10-s4",
      title: "Multi-line Text with <textarea>",
      whyItMatters: "Comments, messages, bios, code snippets — anything longer than a single line uses <textarea>. It's a single tag with a few quirks worth knowing.",
      content: `Unlike \`<input>\`, \`<textarea>\` is a paired tag. Whatever sits between the opening and closing tag becomes the initial value:

\`\`\`
<label for="msg">Message</label>
<textarea id="msg" name="message" rows="5" cols="40" placeholder="Write here..."></textarea>
\`\`\`

Key attributes:

- **\`rows\`** — visible height in lines (default ~2). Just initial; users can resize.
- **\`cols\`** — visible width in characters (default ~20). Usually replaced by CSS width.
- **\`placeholder\`** — gray hint shown when empty.
- **\`maxlength\`** — limit total characters typed.
- **\`required\`** — must be non-empty to submit.
- **\`wrap\`** — \`soft\` (default, lines wrap visually but submitted as typed) or \`hard\` (line breaks are inserted into submission, requires \`cols\`).

A surprising gotcha: any whitespace **inside** the textarea tags becomes initial content. This:

\`\`\`
<textarea>
  Hello
</textarea>
\`\`\`

starts with a leading newline and trailing newline. Either keep it on one line or strip whitespace explicitly:

\`\`\`
<textarea></textarea>          <!-- Truly empty -->
<textarea>Hello</textarea>     <!-- Starts with "Hello" -->
\`\`\`

For sizing, **always use CSS** instead of \`cols\`/\`rows\` for production. CSS gives you responsive widths (\`width: 100%\`), min/max heights, and can disable user resize (\`resize: none\` or \`vertical\`).

\`\`\`
<style>
  textarea {
    width: 100%;
    min-height: 120px;
    resize: vertical;
    font-family: inherit;
  }
</style>
\`\`\`

That last line — \`font-family: inherit\` — fixes the most-missed bug: by default \`<textarea>\` uses monospace font (Courier). Most modern UIs want it to match the rest of the page.`,
      callouts: [
        { type: "common-mistake", title: "Whitespace in tags", content: "Don't write <textarea>\\n  text\\n</textarea> on multiple lines unless you want those exact whitespace characters as initial content." },
        { type: "tip", title: "Style with CSS", content: "Use width:100% + min-height in CSS instead of cols/rows. It's responsive and looks far better." },
        { type: "pro-tip", title: "Auto-grow", content: "Native textareas don't grow with content. To make them auto-grow you need a small bit of JavaScript that adjusts height on input. Libraries like 'react-textarea-autosize' do this." },
      ],
      codeExamples: [
        {
          id: "html10-s4-ex1",
          title: "A polished comment box",
          description: "Real-world textarea with placeholder, char limit, and CSS sizing.",
          code: {
            html: `<form>\n  <label for="comment">Your comment</label><br>\n  <textarea id="comment" name="comment" placeholder="What did you think?" maxlength="500" required></textarea>\n  <button type="submit">Post</button>\n</form>`,
            css: `textarea {\n  width: 100%;\n  min-height: 100px;\n  padding: 8px;\n  font-family: inherit;\n  font-size: 14px;\n  resize: vertical;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n}`,
          },
          explanation: "No cols/rows attributes — CSS handles sizing. font-family: inherit makes it use the page font instead of monospace. resize: vertical lets users grow it but not stretch sideways.",
          tryItPrompt: "Add resize: none to forbid resizing entirely. Then add a max-height of 300px.",
        },
      ],
    },
    {
      id: "html10-s5",
      title: "disabled vs readonly — Two Ways to Lock a Field",
      whyItMatters: "These are constantly confused. They look similar but behave very differently when the form is submitted.",
      content: `Both attributes prevent the user from editing a field. The difference is what happens on form submission:

- **\`disabled\`** — field is grayed out, not focusable, and **its value is NOT submitted**. The server gets nothing for that field. Use when the field is irrelevant in the current state (e.g. shipping address when "pickup in store" is selected).
- **\`readonly\`** — field is normal-looking, can be focused and copied from, and **its value IS submitted**. Use when you want to show the value but prevent edits (e.g. an auto-generated order number).

\`\`\`
<input type="text" name="orderId" value="ORD-12345" readonly>   <!-- submitted -->
<input type="text" name="discount" value="0" disabled>          <!-- NOT submitted -->
\`\`\`

A common pattern: pre-fill an email field for logged-in users with \`readonly\` so they see their email but can't change it. Use \`disabled\` only when the field truly should not exist in the current submission.

**Disabled also affects buttons.** A \`<button disabled>\` is unclickable. This is how you implement the "Submit is disabled until form is valid" UX pattern with native HTML.`,
      callouts: [
        { type: "warning", title: "Disabled = not submitted", content: "If you want the value sent to the server but unchangeable, use readonly. disabled drops the field entirely from form data." },
        { type: "tip", title: "Visual cue", content: "Style readonly fields with a subtle background-color so users immediately know they can't edit. Browsers don't do this by default." },
      ],
      microExercise: {
        instruction: "Create a form with two text inputs: 'username' (readonly, value 'admin') and 'role' (disabled, value 'editor'). Add a submit button.",
        starterCode: { html: `<form>\n  <!-- write your inputs here -->\n  <button>Submit</button>\n</form>` },
        hint: "<input type='text' readonly value='admin'> for the first; add disabled for the second.",
        solution: { html: `<form>\n  <input type="text" name="username" value="admin" readonly>\n  <input type="text" name="role" value="editor" disabled>\n  <button>Submit</button>\n</form>` },
      },
    },
  ],
  exercises: [
    {
      id: "html10-ex1",
      title: "Survey form",
      difficulty: 1,
      description: "Build a quick survey: name (text), favorite color (radio: red/green/blue), favorite snacks (checkboxes: chips/cookies/fruit), and comments (textarea).",
      requirements: [
        "Use a <form> with proper labels and fieldsets",
        "Radios share name='color' with three options",
        "Checkboxes share name='snacks' with three values",
        "Textarea named 'comments' with a placeholder",
        "Submit button at the bottom",
      ],
      starterCode: { html: `<!DOCTYPE html>\n<html><body>\n  <!-- build your survey form here -->\n</body></html>` },
      hints: [
        "Wrap related controls in <fieldset><legend>...</legend>",
        "Each label should either wrap its input or use for/id",
        "Don't forget value attributes on every checkbox and radio",
      ],
      solution: {
        html: `<!DOCTYPE html>\n<html><body>\n<form>\n  <label>Name <input type="text" name="name" required></label>\n\n  <fieldset>\n    <legend>Favorite color</legend>\n    <label><input type="radio" name="color" value="red"> Red</label>\n    <label><input type="radio" name="color" value="green" checked> Green</label>\n    <label><input type="radio" name="color" value="blue"> Blue</label>\n  </fieldset>\n\n  <fieldset>\n    <legend>Favorite snacks</legend>\n    <label><input type="checkbox" name="snacks" value="chips"> Chips</label>\n    <label><input type="checkbox" name="snacks" value="cookies"> Cookies</label>\n    <label><input type="checkbox" name="snacks" value="fruit"> Fruit</label>\n  </fieldset>\n\n  <label>Comments<br>\n    <textarea name="comments" placeholder="Anything else?"></textarea>\n  </label><br>\n\n  <button type="submit">Submit survey</button>\n</form>\n</body></html>`,
      },
      solutionExplanation: "Each radio shares name='color', each checkbox shares name='snacks'. Fieldsets group them semantically and announce a label to screen readers. Every control has a connected label.",
    },
    {
      id: "html10-ex2",
      title: "Booking form with select and optgroup",
      difficulty: 2,
      description: "Build a flight booking form: From (select with grouped cities), To (select with same grouping), passengers (radio 1/2/3/4+), special requests (textarea).",
      requirements: [
        "Two <select>s using <optgroup> for at least two regions",
        "A placeholder disabled option as the default for each select",
        "Radio group named 'passengers' with four options, '1' selected by default",
        "Textarea with maxlength=200",
      ],
      starterCode: { html: `<!DOCTYPE html>\n<html><body>\n  <form>\n    <!-- build form here -->\n  </form>\n</body></html>` },
      hints: [
        "<select><option value='' disabled selected>— Pick —</option>...</select>",
        "Wrap each region's options in <optgroup label='Region name'>",
        "Add maxlength='200' to the textarea",
      ],
      solution: {
        html: `<!DOCTYPE html>\n<html><body>\n<form>\n  <label for="from">From</label>\n  <select id="from" name="from">\n    <option value="" disabled selected>— Pick city —</option>\n    <optgroup label="North America">\n      <option value="nyc">New York</option>\n      <option value="sfo">San Francisco</option>\n    </optgroup>\n    <optgroup label="Europe">\n      <option value="lon">London</option>\n      <option value="par">Paris</option>\n    </optgroup>\n  </select>\n\n  <label for="to">To</label>\n  <select id="to" name="to">\n    <option value="" disabled selected>— Pick city —</option>\n    <optgroup label="North America">\n      <option value="nyc">New York</option>\n      <option value="sfo">San Francisco</option>\n    </optgroup>\n    <optgroup label="Europe">\n      <option value="lon">London</option>\n      <option value="par">Paris</option>\n    </optgroup>\n  </select>\n\n  <fieldset>\n    <legend>Passengers</legend>\n    <label><input type="radio" name="passengers" value="1" checked> 1</label>\n    <label><input type="radio" name="passengers" value="2"> 2</label>\n    <label><input type="radio" name="passengers" value="3"> 3</label>\n    <label><input type="radio" name="passengers" value="4+"> 4+</label>\n  </fieldset>\n\n  <label>Special requests<br>\n    <textarea name="requests" maxlength="200" placeholder="Allergies, accessibility, etc."></textarea>\n  </label>\n\n  <button type="submit">Search flights</button>\n</form>\n</body></html>`,
      },
      solutionExplanation: "Two grouped selects, a radio group with default selection, and a length-limited textarea. The placeholder options force conscious selection.",
    },
    {
      id: "html10-ex3",
      title: "Account settings with disabled & readonly",
      difficulty: 3,
      description: "Build an account settings form with: read-only User ID, read-only email, editable display name, disabled Delete Account button (until a 'I understand' checkbox is checked — checkbox alone, no JS needed).",
      requirements: [
        "User ID input is readonly with a value",
        "Email input is readonly with a value",
        "Display name input is editable",
        "Submit (Save) button always enabled",
        "Delete account button starts disabled",
        "Include the 'I understand' checkbox even if it doesn't actually enable the button (HTML-only)",
      ],
      starterCode: { html: `<!DOCTYPE html>\n<html><body>\n  <form>\n    <!-- build settings here -->\n  </form>\n</body></html>` },
      hints: [
        "<input ... readonly value='...'> for non-editable but submitted",
        "<button disabled>...</button> for un-clickable",
        "Group inputs with labels for accessibility",
      ],
      solution: {
        html: `<!DOCTYPE html>\n<html><body>\n<form>\n  <label>User ID<br>\n    <input type="text" name="userId" value="USR-49823" readonly>\n  </label><br>\n\n  <label>Email<br>\n    <input type="email" name="email" value="user@example.com" readonly>\n  </label><br>\n\n  <label>Display name<br>\n    <input type="text" name="displayName" value="Alex">\n  </label><br>\n\n  <button type="submit">Save changes</button>\n\n  <hr>\n  <fieldset>\n    <legend>Danger zone</legend>\n    <label><input type="checkbox" name="confirmDelete"> I understand this is permanent</label><br>\n    <button type="button" disabled>Delete account</button>\n  </fieldset>\n</form>\n</body></html>`,
      },
      solutionExplanation: "User ID and email are readonly — visible and submitted but not editable. The Delete button is disabled at the HTML level. Wiring it up to the checkbox would require JavaScript (covered later).",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "html10-q1", type: "mcq", question: "What groups radio buttons together?", options: ["The id attribute", "The name attribute", "Wrapping them in <fieldset>", "The class attribute"], correctAnswer: 1, explanation: "Radios with the same `name` belong to one mutually-exclusive group. <fieldset> is just for visual grouping; only `name` enforces single-selection.", difficulty: 1 },
      { id: "html10-q2", type: "true-false", question: "A checkbox with no `value` attribute submits the literal string 'on' when checked.", options: ["True", "False"], correctAnswer: 0, explanation: "True. This is why you should always set value to something meaningful.", difficulty: 2 },
      { id: "html10-q3", type: "mcq", question: "What's the difference between disabled and readonly on a text input?", options: ["No difference", "disabled prevents editing AND submission; readonly prevents editing but the value is still submitted", "disabled prevents typing; readonly prevents focus", "readonly is deprecated"], correctAnswer: 1, explanation: "disabled removes the field from form data entirely. readonly keeps it submitted but prevents user edits.", difficulty: 2 },
      { id: "html10-q4", type: "mcq", question: "Which attribute pre-selects an <option>?", options: ["checked", "active", "selected", "default"], correctAnswer: 2, explanation: "The selected attribute on <option> pre-selects it. (`checked` is for inputs, not options.)", difficulty: 1 },
      { id: "html10-q5", type: "spot-the-bug", question: "What's wrong here?", code: `<input type="radio" name="size" value="s"> S\n<input type="radio" name="weight" value="m"> M\n<input type="radio" name="height" value="l"> L`, options: ["Nothing", "Each radio has a different name, so they're three separate groups — user can pick all three", "Missing labels", "value should be a number"], correctAnswer: 1, explanation: "All three should share name='size' to act as a single group. Different names mean different groups.", difficulty: 2 },
      { id: "html10-q6", type: "mcq", question: "How do you allow multiple selections in a <select>?", options: ["multiple attribute", "type='multiple'", "size='all'", "Wrap in <multi>"], correctAnswer: 0, explanation: "<select multiple> turns the dropdown into a list-box where users can hold Ctrl/Cmd to pick several options.", difficulty: 1 },
      { id: "html10-q7", type: "code-output", question: "What initial text does this textarea contain?", code: `<textarea>\n  Hello\n</textarea>`, options: ["Empty", "'Hello'", "'  Hello  ' (with leading/trailing whitespace and newlines)", "Error"], correctAnswer: 2, explanation: "All whitespace inside <textarea> tags becomes initial content. Always put content on one line or as <textarea></textarea> for empty.", difficulty: 3 },
      { id: "html10-q8", type: "mcq", question: "What's <optgroup> used for?", options: ["Making multiple selects", "Grouping options under a non-selectable header", "Pre-selecting an option", "Disabling a group of options"], correctAnswer: 1, explanation: "optgroup creates a labeled, non-selectable header inside a <select>, useful for organizing long lists.", difficulty: 1 },
    ],
  },
  cheatSheet: [
    { label: "Checkbox", value: "<input type='checkbox' name='x' value='y'>" },
    { label: "Radio group", value: "Same name, different value" },
    { label: "Pre-select input", value: "checked" },
    { label: "Pre-select option", value: "selected" },
    { label: "Dropdown", value: "<select><option value='x'>X</option></select>" },
    { label: "Group options", value: "<optgroup label='Region'>" },
    { label: "Multi-line text", value: "<textarea name='x'></textarea>" },
    { label: "Locked + submitted", value: "readonly" },
    { label: "Locked + not submitted", value: "disabled" },
    { label: "Char limit", value: "maxlength='N'" },
  ],
};

// ============================================================================
// HTML CHAPTER 11 — Forms Part 3: Specialized Inputs & Validation
// ============================================================================
export const htmlCh11: Chapter = {
  id: "html-ch-11",
  number: 11,
  title: "Forms — Part 3: Specialized Inputs & Validation",
  subtitle: "File upload, dates, ranges, colors, and the built-in validation that beats JavaScript 90% of the time.",
  difficulty: "Intermediate",
  estimatedMinutes: 40,
  xpReward: 130,
  prerequisites: ["html-ch-10"],
  partLabel: "Part 2: Structure & Layout",
  learningObjectives: [
    "Use file, date, time, range, color, and other specialized input types.",
    "Restrict file uploads by type and size at the HTML level.",
    "Apply HTML5 validation attributes (required, min, max, pattern, etc.).",
    "Style invalid fields with :invalid and :valid pseudo-classes.",
    "Choose between native validation and custom JavaScript validation.",
  ],
  sections: [
    {
      id: "html11-s1",
      title: "File Upload — <input type='file'>",
      whyItMatters: "Every avatar uploader, every CSV importer, every photo gallery starts with a file input. The HTML is simple; the gotchas are everything.",
      content: `\`<input type="file">\` opens the OS file picker. The selected files become available to JavaScript via the input's \`files\` property, and (with a properly configured form) get sent in a multipart POST request.

\`\`\`
<form action="/upload" method="POST" enctype="multipart/form-data">
  <label for="avatar">Choose an image</label>
  <input type="file" id="avatar" name="avatar" accept="image/*">
  <button type="submit">Upload</button>
</form>
\`\`\`

Three things to notice:

1. **\`enctype="multipart/form-data"\`** on the form is mandatory for file uploads. Without it, the browser submits only the file's name as a string. This is the #1 file-upload bug.
2. **\`accept\`** filters the picker to specific types. Examples: \`image/*\`, \`image/png,image/jpeg\`, \`.pdf,.docx\`, \`audio/*\`. It's a *hint* — users can override it. Always re-validate on the server.
3. **\`multiple\`** lets users pick more than one file at once.

\`\`\`
<input type="file" name="photos" accept="image/*" multiple>
\`\`\`

**You cannot set the value of a file input from HTML.** For security, browsers refuse to let pages pre-fill a file path. The user must always pick.

**You cannot validate file size in HTML.** There's no \`maxsize\` attribute. Server-side validation is mandatory; client-side checks need JavaScript.

**Camera capture on mobile** uses the \`capture\` attribute:

\`\`\`
<input type="file" accept="image/*" capture="environment">  <!-- back camera -->
<input type="file" accept="image/*" capture="user">         <!-- front/selfie -->
\`\`\`

This skips the file picker and opens the camera directly on phones. Desktop browsers ignore it.`,
      callouts: [
        { type: "warning", title: "Always set enctype", content: "Without enctype='multipart/form-data', file uploads silently fail — the browser sends only the file name string." },
        { type: "warning", title: "Always re-validate server-side", content: "accept and any JS file-size check are user-bypassable. Treat all uploads as untrusted on the server." },
        { type: "pro-tip", title: "Drag and drop", content: "<input type='file'> handles drag-and-drop natively in modern browsers: dropping a file on the input triggers selection. No extra code needed for basic D&D." },
      ],
      codeExamples: [
        {
          id: "html11-s1-ex1",
          title: "A multi-image uploader",
          description: "Restricted to images, allows multiple files, includes camera capture on mobile.",
          code: {
            html: `<form action="/upload" method="POST" enctype="multipart/form-data">\n  <label for="photos">Upload photos</label>\n  <input type="file" id="photos" name="photos[]" accept="image/png,image/jpeg,image/webp" multiple capture="environment">\n  <button type="submit">Upload all</button>\n</form>`,
          },
          explanation: "name='photos[]' is a convention many backends parse into an array. The accept restricts to common image types; multiple lets the user pick several at once; capture suggests the rear camera on phones.",
          tryItPrompt: "Change the accept to allow only PDF files. Remove `multiple` and `capture`.",
        },
      ],
    },
    {
      id: "html11-s2",
      title: "Date, Time, and Number Inputs",
      whyItMatters: "These give you native date pickers, time pickers, and validated number inputs for free — no JavaScript libraries needed for 90% of cases.",
      content: `**Date and time pickers:**

- \`type="date"\` — a calendar picker, returns YYYY-MM-DD.
- \`type="time"\` — a time picker, returns HH:MM (or HH:MM:SS with \`step\`).
- \`type="datetime-local"\` — date + time picker.
- \`type="month"\` — picks a month + year, returns YYYY-MM.
- \`type="week"\` — picks an ISO week number, returns YYYY-Www.

\`\`\`
<input type="date" name="birthday" min="1900-01-01" max="2025-12-31">
<input type="time" name="meetingTime" min="09:00" max="17:00">
<input type="datetime-local" name="event">
\`\`\`

The \`min\` and \`max\` attributes restrict the allowed range. The picker visually grays out invalid dates.

**Important:** Safari on macOS and older Firefox have inconsistent UI for these. The fallback is a plain text input, so always use \`min\`/\`max\` and a \`pattern\` if you need validation.

**Number input:**

\`\`\`
<input type="number" name="age" min="0" max="120" step="1">
<input type="number" name="price" min="0" step="0.01">
\`\`\`

\`step\` controls the increment for the up/down buttons. For decimal input, set step="0.01" (otherwise the browser rejects decimals). For currency, step="0.01" gives two-decimal precision.

A subtle gotcha: \`type="number"\` strips leading zeros and rejects non-numeric characters like commas (so US formatting "1,000" gets rejected). For postal codes, IDs, or phone numbers, **use \`type="text"\` with \`pattern\`** instead. \`type="number"\` is for actual quantities you'll do math with.

**Range slider:**

\`\`\`
<input type="range" name="volume" min="0" max="100" value="50" step="5">
\`\`\`

Returns a string number from 0–100. There's no built-in label — you usually pair it with a JS-updated text display.

**Color picker:**

\`\`\`
<input type="color" name="themeColor" value="#7C3AED">
\`\`\`

Opens the OS color picker. Returns a 7-character hex string like "#ff0000". No alpha channel.`,
      callouts: [
        { type: "common-mistake", title: "Number inputs reject decimals by default", content: "type='number' with no step treats integers only. Set step='0.01' for currency, step='any' for arbitrary precision." },
        { type: "tip", title: "Postal codes are NOT numbers", content: "Use type='text' with pattern for ZIP/postal codes — leading zeros matter (07720 ≠ 7720)." },
      ],
      codeExamples: [
        {
          id: "html11-s2-ex1",
          title: "Event form with date/time + range + color",
          description: "Each input type matched to its purpose.",
          code: {
            html: `<form>\n  <label>Event date<br><input type="date" name="date" min="2025-01-01"></label><br>\n  <label>Start time<br><input type="time" name="start" min="08:00" max="22:00"></label><br>\n  <label>Capacity<br><input type="number" name="capacity" min="1" max="500" value="50"></label><br>\n  <label>Brand color<br><input type="color" name="color" value="#00D4FF"></label><br>\n  <label>Volume<br><input type="range" name="vol" min="0" max="100" value="80"></label><br>\n  <button>Create event</button>\n</form>`,
          },
          explanation: "Each input restricts its values appropriately. The range and color inputs need no validation — they can only return valid values.",
          tryItPrompt: "Add a 'Number of guests' field allowing decimals (impossible in real life, but try it). Hint: step='0.5'.",
        },
      ],
    },
    {
      id: "html11-s3",
      title: "Built-in Validation — required, pattern, min/max",
      whyItMatters: "HTML5 validation handles 90% of common form rules with zero JavaScript. Use it as your first line of defense; layer JS only when needed.",
      content: `Several attributes trigger native validation. When the user clicks submit, the browser checks them and shows a tooltip on the first invalid field — no script required.

**Universal:**
- \`required\` — field must be non-empty.

**Text inputs:**
- \`minlength\`, \`maxlength\` — character count bounds.
- \`pattern\` — a regex the value must match. Pair with \`title\` for the error message.

\`\`\`
<input type="text" name="username" required minlength="3" maxlength="20" pattern="[a-zA-Z0-9_]+" title="Letters, numbers, underscores only">
\`\`\`

**Numbers and dates:**
- \`min\`, \`max\` — range bounds.
- \`step\` — required increment.

\`\`\`
<input type="number" name="age" required min="13" max="120">
<input type="date" name="dob" required max="2010-01-01">
\`\`\`

**Email and URL:**
\`type="email"\` and \`type="url"\` validate format automatically. Email accepts anything matching \`text@text\` (deliberately loose — strict email validation is impossible).

\`\`\`
<input type="email" name="email" required>
<input type="url" name="website" required>
\`\`\`

**Bypassing validation:** Add \`novalidate\` to the form to skip native validation entirely (useful when you want to handle everything in JS). \`<button formnovalidate>\` skips it for that one button (e.g. a "Save draft" button next to a strict "Publish").

\`\`\`
<form novalidate>
  <input type="email" name="x" required>  <!-- ignored -->
</form>

<form>
  <input type="email" name="x" required>
  <button>Publish</button>                <!-- validates -->
  <button formnovalidate>Save draft</button>  <!-- skips validation -->
</form>
\`\`\``,
      callouts: [
        { type: "tip", title: "title= becomes the error message", content: "When pattern fails, the browser shows the value of the title attribute as a hint. Always set a friendly title alongside pattern." },
        { type: "info", title: "Validation runs on submit", content: "Native validation triggers when the user clicks submit (or presses Enter). It does NOT run as the user types — that's a JavaScript thing." },
      ],
      codeExamples: [
        {
          id: "html11-s3-ex1",
          title: "A self-validating sign-up form",
          description: "Submit without filling, or with bad data, and the browser handles all the error tooltips.",
          code: {
            html: `<form>\n  <label>Username<br>\n    <input type="text" name="user" required minlength="3" maxlength="20" pattern="[a-zA-Z0-9_]+" title="3–20 chars; letters, numbers, underscores">\n  </label><br>\n\n  <label>Email<br>\n    <input type="email" name="email" required>\n  </label><br>\n\n  <label>Age<br>\n    <input type="number" name="age" required min="13" max="120">\n  </label><br>\n\n  <label>Website<br>\n    <input type="url" name="site" placeholder="https://...">\n  </label><br>\n\n  <button type="submit">Sign up</button>\n</form>`,
          },
          explanation: "Five fields with five different validation rules — all enforced without a single line of JavaScript. Try submitting an empty form and watch the browser tooltips guide you.",
          tryItPrompt: "Add a 'Confirm password' field. Note: there's no native way to compare two fields — that's where you'd reach for JavaScript.",
        },
      ],
    },
    {
      id: "html11-s4",
      title: "Styling Validity — :valid, :invalid, :required",
      whyItMatters: "The browser knows which fields are valid; CSS pseudo-classes let you style them. This is how modern forms get green checks and red borders without JavaScript.",
      content: `Three CSS pseudo-classes (and some friends) let you target form state:

- \`:required\` — fields with the required attribute.
- \`:optional\` — fields without it.
- \`:valid\` — current value passes all validation rules.
- \`:invalid\` — current value fails any rule.
- \`:placeholder-shown\` — input is empty and showing its placeholder.
- \`:focus\` — input is focused.

\`\`\`
input:required {
  border-left: 3px solid #888;  /* visual marker for required fields */
}
input:invalid {
  border-color: #ef4444;
  background: #fef2f2;
}
input:valid {
  border-color: #10b981;
}
\`\`\`

The trap: by default \`:invalid\` matches **immediately** — even a blank required field is "invalid" before the user has typed anything. That looks aggressive. The fix is to combine with \`:placeholder-shown\` or \`:not(:focus):not(:placeholder-shown)\`:

\`\`\`
/* Only show invalid styling AFTER the user has typed and left the field */
input:invalid:not(:focus):not(:placeholder-shown) {
  border-color: #ef4444;
}
\`\`\`

Even better, the modern \`:user-invalid\` pseudo-class only matches after the user has interacted with the field. It's now widely supported:

\`\`\`
input:user-invalid {
  border-color: #ef4444;
}
\`\`\`

Use \`:user-invalid\` when targeting modern browsers — it gives the right UX without the workaround.`,
      callouts: [
        { type: "pro-tip", title: ":user-invalid is the future", content: "Native :user-invalid only fires after interaction, exactly when you want to show errors. Supported in all modern browsers." },
        { type: "common-mistake", title: "Empty fields are invalid", content: "On page load, every required field is :invalid. Without filtering, your form lights up red instantly. Combine with :placeholder-shown or use :user-invalid." },
      ],
      microExercise: {
        instruction: "Style a required text input to show a red 2px border when invalid AFTER user interaction (use :user-invalid).",
        starterCode: { html: `<input type="text" required placeholder="Type here">`, css: `/* style invalid only after user input */` },
        hint: "input:user-invalid { border: 2px solid red; }",
        solution: { html: `<input type="text" required placeholder="Type here">`, css: `input { padding: 8px; border: 1px solid #ccc; }\ninput:user-invalid { border: 2px solid red; background: #fff5f5; }` },
      },
    },
    {
      id: "html11-s5",
      title: "When to Use JavaScript Instead",
      whyItMatters: "HTML validation is amazing but limited. Knowing where it stops saves you from fighting the browser.",
      content: `Use **HTML validation** for:
- Required fields.
- Format checks (email, URL, regex pattern).
- Length and range bounds.
- Single-field rules.

Reach for **JavaScript** when:
- **Comparing fields** — "passwords must match" requires JS.
- **Async validation** — "username must not be taken" requires a server check.
- **Custom error UIs** — the browser's tooltip is ugly and untranslatable; build your own to match your design.
- **Conditional validation** — "phone is required IF marketing checkbox is on".
- **Real-time feedback** — show a green check as the user types, not on submit.

A common production pattern: keep the HTML attributes (so non-JS users still get baseline protection), then enhance with JavaScript for the polished UX. That's progressive enhancement.

\`\`\`
<input type="email" required>     <!-- baseline: native validation -->
<!-- JS adds: live checking, prettier errors, async username check -->
\`\`\`

JavaScript-side, the modern API is the **Constraint Validation API**:

\`\`\`
const input = document.querySelector('input');
input.validity         // { valid, valueMissing, typeMismatch, ... }
input.validationMessage // human-readable message
input.setCustomValidity('Passwords must match'); // override
input.reportValidity(); // shows the browser tooltip
\`\`\`

We'll dive into this in the JavaScript track. For now, know that the HTML attributes are your foundation; JS layers richer behavior on top.`,
      callouts: [
        { type: "info", title: "Defense in depth", content: "Even with both HTML AND JS validation, you MUST validate on the server. Anyone can disable JS or send raw HTTP requests bypassing your form entirely." },
      ],
    },
  ],
  exercises: [
    {
      id: "html11-ex1",
      title: "Profile picture uploader",
      difficulty: 1,
      description: "Build a form to upload a profile picture: file input restricted to images, plus a username text field, both required.",
      requirements: [
        "<form> with enctype='multipart/form-data' and method='POST'",
        "File input restricted to image/* and required",
        "Username text input, required, minlength=3, maxlength=20",
        "Submit button labeled 'Save profile'",
      ],
      starterCode: { html: `<!DOCTYPE html>\n<html><body>\n  <!-- form here -->\n</body></html>` },
      hints: [
        "enctype='multipart/form-data' is mandatory for files",
        "accept='image/*' restricts the picker",
        "Both fields need the required attribute",
      ],
      solution: {
        html: `<!DOCTYPE html>\n<html><body>\n<form action="/profile" method="POST" enctype="multipart/form-data">\n  <label>Username<br>\n    <input type="text" name="username" required minlength="3" maxlength="20">\n  </label><br>\n  <label>Profile picture<br>\n    <input type="file" name="avatar" accept="image/*" required>\n  </label><br>\n  <button type="submit">Save profile</button>\n</form>\n</body></html>`,
      },
      solutionExplanation: "The form uses multipart encoding (required for files). Both fields are required; the username has length bounds.",
    },
    {
      id: "html11-ex2",
      title: "Event booking with date and number validation",
      difficulty: 2,
      description: "Booking form: event date (must be in 2025), guests (1–20), email (required), special color preference (color picker).",
      requirements: [
        "Date input with min='2025-01-01' and max='2025-12-31'",
        "Number input for guests with min=1, max=20",
        "Email input, required",
        "Color input, default value any color",
        "Submit button 'Book event'",
      ],
      starterCode: { html: `<!DOCTYPE html>\n<html><body>\n  <form>\n    <!-- build form -->\n  </form>\n</body></html>` },
      hints: [
        "type='date' supports min/max with YYYY-MM-DD",
        "type='number' min/max restricts the up/down buttons AND validates",
        "Always set value on type='color' or it defaults to black",
      ],
      solution: {
        html: `<!DOCTYPE html>\n<html><body>\n<form>\n  <label>Date<br>\n    <input type="date" name="date" required min="2025-01-01" max="2025-12-31">\n  </label><br>\n  <label>Guests<br>\n    <input type="number" name="guests" required min="1" max="20" value="2">\n  </label><br>\n  <label>Email<br>\n    <input type="email" name="email" required>\n  </label><br>\n  <label>Theme color<br>\n    <input type="color" name="color" value="#7C3AED">\n  </label><br>\n  <button type="submit">Book event</button>\n</form>\n</body></html>`,
      },
      solutionExplanation: "Each input enforces its own constraint natively. Try submitting a 2024 date or 25 guests — the browser blocks it.",
    },
    {
      id: "html11-ex3",
      title: "Self-validating signup with CSS feedback",
      difficulty: 3,
      description: "Build a signup form (username, email, password 8+ chars, age 13+) and use CSS to show a red border on invalid fields AFTER user interaction.",
      requirements: [
        "All four fields are required and have appropriate validation",
        "Password uses minlength=8 and pattern requiring at least one digit",
        "Use :user-invalid in CSS to highlight fields in red after user types",
        "Use :valid to highlight in green",
      ],
      starterCode: { html: `<!DOCTYPE html>\n<html><body>\n  <form>\n    <!-- inputs here -->\n  </form>\n</body></html>`, css: `/* validity styles */` },
      hints: [
        "pattern='(?=.*\\\\d).{8,}' requires 8+ chars with at least one digit",
        "input:user-invalid { border-color: red; } only after user interaction",
        "input:valid { border-color: green; }",
      ],
      solution: {
        html: `<!DOCTYPE html>\n<html><body>\n<form>\n  <label>Username<br>\n    <input type="text" name="user" required minlength="3" pattern="[a-zA-Z0-9_]+" title="Letters, numbers, underscores">\n  </label><br>\n  <label>Email<br>\n    <input type="email" name="email" required>\n  </label><br>\n  <label>Password (8+ chars, at least one digit)<br>\n    <input type="password" name="pw" required minlength="8" pattern="(?=.*\\\\d).{8,}" title="8+ chars with at least one digit">\n  </label><br>\n  <label>Age<br>\n    <input type="number" name="age" required min="13" max="120">\n  </label><br>\n  <button type="submit">Sign up</button>\n</form>\n</body></html>`,
        css: `input {\n  display: block;\n  margin: 4px 0 12px;\n  padding: 8px;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  font-size: 14px;\n}\ninput:user-invalid {\n  border-color: #ef4444;\n  background: #fef2f2;\n}\ninput:user-valid {\n  border-color: #10b981;\n  background: #f0fdf4;\n}`,
      },
      solutionExplanation: "Native validation handles all the rules. CSS reacts to :user-invalid (after interaction) and :user-valid for live feedback. No JavaScript needed.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "html11-q1", type: "mcq", question: "What's required on a <form> for file uploads to work?", options: ["method='FILE'", "enctype='multipart/form-data'", "type='file'", "Nothing extra"], correctAnswer: 1, explanation: "Without enctype='multipart/form-data', the form sends only the file's name string instead of the file's contents.", difficulty: 2 },
      { id: "html11-q2", type: "true-false", question: "You can pre-fill a file input's value from HTML.", options: ["True", "False"], correctAnswer: 1, explanation: "False. For security reasons, browsers refuse to let pages set a file path. The user must always choose.", difficulty: 1 },
      { id: "html11-q3", type: "mcq", question: "What does the `accept` attribute on <input type='file'> do?", options: ["Hard-blocks non-matching files at the OS level", "Hints the file picker to filter by type, but is bypassable", "Limits file size", "Sets the upload directory"], correctAnswer: 1, explanation: "accept is a hint — users can override and pick any file. Always re-validate server-side.", difficulty: 2 },
      { id: "html11-q4", type: "mcq", question: "Which input type is best for a US ZIP code?", options: ["type='number'", "type='text' with pattern", "type='zip'", "type='postal'"], correctAnswer: 1, explanation: "type='number' strips leading zeros (07720 → 7720) and rejects non-digits. Use text with a pattern for postal codes.", difficulty: 2 },
      { id: "html11-q5", type: "mcq", question: "How do you allow decimals in <input type='number'>?", options: ["type='decimal'", "Set step='0.01' (or 'any')", "Add allowDecimals", "Decimals work by default"], correctAnswer: 1, explanation: "By default step is 1, which forces integers. Set step='0.01' for currency or 'any' for arbitrary precision.", difficulty: 2 },
      { id: "html11-q6", type: "spot-the-bug", question: "Why doesn't this form upload the file?", code: `<form action="/upload" method="POST">\n  <input type="file" name="doc">\n  <button>Upload</button>\n</form>`, options: ["Missing required attribute", "Missing enctype='multipart/form-data'", "Missing accept attribute", "Form needs id"], correctAnswer: 1, explanation: "Without multipart encoding, the browser submits only the file's filename as a normal form field. The actual file bytes never leave the page.", difficulty: 2 },
      { id: "html11-q7", type: "mcq", question: "Which pseudo-class only matches AFTER the user interacts with a field?", options: [":invalid", ":user-invalid", ":dirty", ":touched"], correctAnswer: 1, explanation: ":user-invalid is the modern pseudo-class that only matches once the user has interacted, avoiding 'red on page load'.", difficulty: 3 },
      { id: "html11-q8", type: "mcq", question: "Which scenario REQUIRES JavaScript (HTML validation can't do it)?", options: ["Required fields", "Email format", "Password >= 8 chars", "Confirming two password fields match"], correctAnswer: 3, explanation: "HTML can't compare fields to each other. Cross-field validation requires JavaScript.", difficulty: 3 },
    ],
  },
  cheatSheet: [
    { label: "File upload", value: "<input type='file' accept='image/*'>" },
    { label: "Multi-file", value: "+ multiple" },
    { label: "Mobile camera", value: "+ capture='environment'" },
    { label: "Form for files", value: "enctype='multipart/form-data'" },
    { label: "Date picker", value: "<input type='date' min max>" },
    { label: "Number with decimals", value: "step='0.01'" },
    { label: "Required field", value: "required" },
    { label: "Pattern", value: "pattern='regex' title='msg'" },
    { label: "Skip validation", value: "<form novalidate>" },
    { label: "Style after interaction", value: ":user-invalid / :user-valid" },
  ],
};

// ============================================================================
// HTML CHAPTER 12 — Semantic HTML
// ============================================================================
export const htmlCh12: Chapter = {
  id: "html-ch-12",
  number: 12,
  title: "Semantic HTML",
  subtitle: "header, nav, main, article, section, aside, footer — and why <div> is the last resort.",
  difficulty: "Intermediate",
  estimatedMinutes: 35,
  xpReward: 120,
  prerequisites: ["html-ch-11"],
  partLabel: "Part 2: Structure & Layout",
  learningObjectives: [
    "Define 'semantic HTML' and explain why it matters for SEO and accessibility.",
    "Use header, nav, main, article, section, aside, footer correctly.",
    "Decide between <article> vs <section> vs <div>.",
    "Recognize when a <div> or <span> is the right choice (and when it isn't).",
    "Build a page outline that screen readers and search engines understand.",
  ],
  sections: [
    {
      id: "html12-s1",
      title: "What 'Semantic' Means",
      whyItMatters: "Two pages can look identical in a browser but be very different to a screen reader, a search engine, or a future maintainer. Semantic HTML carries meaning — it's the difference between 'this looks like a heading' and 'this IS a heading'.",
      realWorldAnalogy: "A book has a title page, table of contents, chapters, footnotes, and an index. Imagine if every section were just blank pages with no labels — you could read them in order, but you couldn't navigate. <div> soup is exactly that. Semantic tags are the chapter headings and the table of contents.",
      content: `In the early HTML days, developers built entire pages out of \`<div>\` (block) and \`<span>\` (inline). It worked visually, but it produced what we now call **div soup**:

\`\`\`
<div class="header">
  <div class="logo">My Site</div>
  <div class="nav">
    <div class="nav-item"><a href="/">Home</a></div>
    <div class="nav-item"><a href="/about">About</a></div>
  </div>
</div>
<div class="main">
  <div class="article">
    <div class="title">Welcome</div>
    <div class="text">Hello world.</div>
  </div>
</div>
<div class="footer">© 2025</div>
\`\`\`

Every \`<div>\` is generic — it tells the browser nothing about what role it plays. A screen reader sees ten interchangeable boxes. A search engine has no idea which part is the main content vs the navigation.

HTML5 introduced **semantic elements** that describe their *purpose*:

\`\`\`
<header>
  <h1>My Site</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>
<main>
  <article>
    <h2>Welcome</h2>
    <p>Hello world.</p>
  </article>
</main>
<footer>© 2025</footer>
\`\`\`

The HTML now reads like a document outline. A screen reader user can jump directly to "main content" or skim the navigation landmarks. A search engine knows the article body is the important content. A new developer joining the team can understand the page layout in 5 seconds without reading any CSS.

**Semantic HTML costs nothing extra to write — it's the same characters as div soup — and produces meaningful structure.** This is why every modern guideline says: use semantic tags first, fall back to <div> only when nothing semantic fits.`,
      callouts: [
        { type: "info", title: "Visual = identical", content: "Semantic tags have no default styling beyond display: block. Switching from <div class='nav'> to <nav> looks the same. The benefits are invisible to your eye but huge for tools." },
      ],
    },
    {
      id: "html12-s2",
      title: "The Page-Level Landmarks",
      whyItMatters: "Five elements form the skeleton of nearly every web page. Get these right and you've solved 80% of semantic HTML.",
      content: `**\`<header>\`** — Introductory content for its parent. Usually contains the logo, site title, primary nav, and maybe a search bar. A page can have multiple \`<header>\`s — one for the page (containing the site logo) and additional ones inside articles or sections (containing the article title).

**\`<nav>\`** — A major navigation block. Use it for primary site navigation, in-page table of contents, breadcrumbs, or pagination. **Do not** wrap every collection of links in <nav> — only the ones that constitute meaningful navigation. A "Related posts" list at the bottom of an article is borderline; a footer with privacy/terms links is not <nav>.

**\`<main>\`** — The main, unique content of the page. There must be exactly one \`<main>\` per page, and it must NOT be inside <article>, <aside>, <header>, <footer>, or <nav>. Screen reader users can jump to it with a single keyboard shortcut, so it's the most impactful tag for accessibility.

**\`<aside>\`** — Content tangentially related to the surrounding content. Sidebars, pull quotes, related-link boxes, ads. The page should still make sense if you removed every \`<aside>\`.

**\`<footer>\`** — Closing content for its parent. Like header, you can have multiple — one for the page (copyright, social links) and one inside each article (author bio, tags).

A typical layout:

\`\`\`
<body>
  <header>
    <h1>My Blog</h1>
    <nav>
      <a href="/">Home</a> <a href="/posts">Posts</a> <a href="/about">About</a>
    </nav>
  </header>

  <main>
    <article>
      <header>
        <h2>Why semantic HTML matters</h2>
        <p>By Alex · Apr 22, 2026</p>
      </header>
      <p>Article content...</p>
      <footer>
        <p>Tagged: HTML, Accessibility</p>
      </footer>
    </article>

    <aside>
      <h3>Related posts</h3>
      <ul>
        <li><a href="/x">CSS Grid Basics</a></li>
        <li><a href="/y">JS Promises</a></li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>© 2026 My Blog · <a href="/privacy">Privacy</a></p>
  </footer>
</body>
\`\`\`

This is the canonical pattern. Memorize the shape; almost every blog, news site, and content page follows it.`,
      callouts: [
        { type: "warning", title: "Only one <main>", content: "Multiple <main> elements on the same page is invalid. Use exactly one for the unique main content." },
        { type: "tip", title: "<nav> doesn't include footer links", content: "Generic footer link lists (privacy, terms, sitemap) typically go inside <footer> directly, not wrapped in <nav>. Reserve <nav> for major site navigation." },
      ],
      codeExamples: [
        {
          id: "html12-s2-ex1",
          title: "A complete semantic page",
          description: "Compare this to the div-soup version you'd write in 2010.",
          code: {
            html: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Semantic blog</title>\n</head>\n<body>\n  <header>\n    <h1>Dev Notes</h1>\n    <nav>\n      <a href="/">Home</a> | <a href="/posts">Posts</a> | <a href="/about">About</a>\n    </nav>\n  </header>\n\n  <main>\n    <article>\n      <header>\n        <h2>The Power of Semantic HTML</h2>\n        <p>Posted April 22, 2026 by Alex</p>\n      </header>\n      <p>Semantic HTML carries meaning that <code>&lt;div&gt;</code> never could.</p>\n      <p>It helps screen readers, search engines, and your future self.</p>\n      <footer>Tags: HTML, Accessibility</footer>\n    </article>\n\n    <aside>\n      <h3>Related</h3>\n      <ul>\n        <li><a href="#">CSS Grid Tour</a></li>\n        <li><a href="#">JS Async Basics</a></li>\n      </ul>\n    </aside>\n  </main>\n\n  <footer>\n    <p>© 2026 Dev Notes · <a href="/privacy">Privacy</a></p>\n  </footer>\n</body>\n</html>`,
          },
          explanation: "Page-level header (logo + nav), main with an article (which has its own internal header and footer), an aside for related links, and a page footer for legal/contact. Five distinct landmarks, all named by purpose.",
          tryItPrompt: "Add a second <article> after the first to simulate a blog index page with multiple posts.",
        },
      ],
    },
    {
      id: "html12-s3",
      title: "<article> vs <section> vs <div>",
      whyItMatters: "These three are the most-confused tags in HTML. Picking the wrong one isn't a bug, but the right one signals intent perfectly.",
      content: `The simplest definitions:

- **\`<article>\`** — A self-contained piece of content that could stand alone. Could be republished on its own. Has a heading. Examples: a blog post, a news story, a forum reply, a product card in a list, a tweet.
- **\`<section>\`** — A thematic grouping of content within a larger document. Has a heading. Examples: chapters in an article, tabs in a tabbed interface, "Features" / "Pricing" / "FAQ" sections of a landing page.
- **\`<div>\`** — A generic block container with no semantic meaning. Use only when no semantic tag fits — typically as a styling/layout wrapper.

The decision tree:

1. **Does the chunk make sense if I copy it to another website on its own?** → \`<article>\`
2. **Is it a thematic part of a larger whole, with its own heading?** → \`<section>\`
3. **Is it just a wrapper for CSS/JS purposes with no meaning?** → \`<div>\`

Both \`<article>\` and \`<section>\` should contain a heading (\`<h1>\`–\`<h6>\`). If you can't think of a heading, you probably don't want \`<section>\` — use \`<div>\`.

Examples in practice:

A blog post page:

\`\`\`
<main>
  <article>                       <!-- the whole post is an article -->
    <h1>How to Cook Pasta</h1>
    <section>                     <!-- the ingredients section -->
      <h2>Ingredients</h2>
      <ul>...</ul>
    </section>
    <section>                     <!-- the steps section -->
      <h2>Steps</h2>
      <ol>...</ol>
    </section>
  </article>
</main>
\`\`\`

A list of blog posts on a homepage:

\`\`\`
<main>
  <h1>Recent posts</h1>
  <article>                       <!-- each post is its own article -->
    <h2>Post one</h2>
    <p>Excerpt...</p>
  </article>
  <article>
    <h2>Post two</h2>
    <p>Excerpt...</p>
  </article>
</main>
\`\`\`

A landing page:

\`\`\`
<main>
  <section>                       <!-- thematic, but not standalone -->
    <h2>Features</h2>
    <p>...</p>
  </section>
  <section>
    <h2>Pricing</h2>
    <p>...</p>
  </section>
</main>
\`\`\`

A purely visual wrapper:

\`\`\`
<div class="grid-12-cols">         <!-- no meaning, just layout -->
  <article>...</article>
  <article>...</article>
</div>
\`\`\``,
      callouts: [
        { type: "common-mistake", title: "Section without a heading", content: "If your <section> doesn't have an <h2>/<h3>, it should probably be a <div>. Sections are thematic groupings — themes need names." },
        { type: "tip", title: "Article is more strict", content: "Use <article> when in doubt between section and article. <article> is more semantic and easier to reason about." },
      ],
      microExercise: {
        instruction: "Mark up a homepage that has a 'Welcome' intro, a 'Latest Posts' list with 2 post cards, and a 'Newsletter' signup. Use article, section, and aside appropriately.",
        starterCode: { html: `<main>\n  <!-- structure here -->\n</main>` },
        hint: "Welcome and Newsletter are sections. The two posts are articles inside a section labeled 'Latest Posts'. Newsletter could also be an <aside>.",
        solution: { html: `<main>\n  <section>\n    <h2>Welcome</h2>\n    <p>Glad you're here.</p>\n  </section>\n\n  <section>\n    <h2>Latest Posts</h2>\n    <article>\n      <h3>First post</h3>\n      <p>Excerpt...</p>\n    </article>\n    <article>\n      <h3>Second post</h3>\n      <p>Excerpt...</p>\n    </article>\n  </section>\n\n  <aside>\n    <h2>Newsletter</h2>\n    <form><input type="email" placeholder="Email"><button>Subscribe</button></form>\n  </aside>\n</main>` },
      },
    },
    {
      id: "html12-s4",
      title: "Other Useful Semantic Tags",
      whyItMatters: "A handful of less-common semantic tags handle specific needs: figures with captions, time, addresses, code, etc.",
      content: `**\`<figure>\` and \`<figcaption>\`** — Wrap an image, diagram, code snippet, or chart with a caption.

\`\`\`
<figure>
  <img src="chart.png" alt="Sales chart Q1 2026">
  <figcaption>Q1 2026 sales by region.</figcaption>
</figure>
\`\`\`

The semantic benefit: a screen reader user gets "figure: Q1 2026 sales by region" as one unit. The caption is associated with the image.

**\`<time>\`** — A specific date or time. The \`datetime\` attribute holds the machine-readable version while the visible text is human-friendly.

\`\`\`
Posted on <time datetime="2026-04-22">April 22, 2026</time>
\`\`\`

Search engines use this for events and articles. SEO-friendly out of the box.

**\`<address>\`** — Contact info for the article's or page's author. Not a postal address generally — it's specifically *contact info* (often used in author bios and page footers).

\`\`\`
<address>
  Written by <a href="/author/alex">Alex</a> ·
  <a href="mailto:alex@example.com">email</a>
</address>
\`\`\`

**\`<details>\`** and **\`<summary>\`** — Native disclosure widget. Click the summary to expand.

\`\`\`
<details>
  <summary>Click to read more</summary>
  <p>Hidden by default; revealed on click. No JavaScript needed.</p>
</details>
\`\`\`

Used for FAQs, "show solution" buttons, and progressive-disclosure UIs. We'll go deeper in chapter 35.

**\`<dialog>\`** — Native modal dialog. We'll cover it in chapter 34.

**\`<mark>\`** — Highlighted text (yellow background by default). Used for search-result highlighting.

\`\`\`
<p>The query was <mark>semantic HTML</mark>.</p>
\`\`\`

**Avoid these less-useful semantic tags:**

- \`<menu>\` — historically meant for context menus; almost never used today.
- \`<hgroup>\` — was meant to group related headings; spec-fluid; many tools don't support it. Skip.
- \`<bdi>\`, \`<wbr>\`, \`<ruby>\` — niche internationalization tools. Learn when you need them.

Knowing the *names* of these is enough until a real use case appears.`,
      callouts: [
        { type: "pro-tip", title: "<time> for SEO", content: "Google uses <time datetime='...'> on articles to determine 'published' and 'modified' dates for search results. Adding it to your blog gives free SEO." },
      ],
    },
    {
      id: "html12-s5",
      title: "<div> and <span> — When They're Right",
      whyItMatters: "Semantic-first doesn't mean div-never. There are cases where a generic wrapper is exactly right.",
      content: `The rule: **use semantic tags for content with meaning; use <div> and <span> for purely presentational wrappers**.

Legitimate uses for \`<div>\`:

- A flexbox or grid container that wraps multiple unrelated elements purely for layout.
- A wrapper to apply a class for CSS styling that affects only visuals (background color, padding, border).
- A wrapper around a JS component with no semantic role.
- Any time you literally need "a box" with no inherent meaning.

\`\`\`
<div class="card-grid">                    <!-- pure layout wrapper -->
  <article class="card">...</article>
  <article class="card">...</article>
  <article class="card">...</article>
</div>
\`\`\`

Legitimate uses for \`<span>\`:

- Wrapping a slice of inline text to style it with CSS.
- Adding a class to part of a sentence for JavaScript to find/change.

\`\`\`
<p>Welcome, <span class="username">Alex</span>!</p>
<p>Status: <span class="badge badge-active">Active</span></p>
\`\`\`

The trap is **using <div> when a semantic tag exists**:

\`\`\`
<!-- BAD -->
<div class="header">...</div>
<div class="nav">...</div>
<div class="article">...</div>

<!-- GOOD -->
<header>...</header>
<nav>...</nav>
<article>...</article>
\`\`\`

Reach for the semantic tag first. If none fits, use \`<div>\` confidently — it's not a bug, it's a generic tool.`,
      callouts: [
        { type: "info", title: "Default styling = identical", content: "All semantic block tags (header, nav, main, etc.) default to display: block, just like <div>. Switching costs nothing visually." },
        { type: "common-mistake", title: "<div onclick>", content: "Using <div onclick> as a button is the most common a11y mistake. It's not focusable by keyboard, has no role, and screen readers ignore it. Always use <button> for clicks." },
      ],
    },
  ],
  exercises: [
    {
      id: "html12-ex1",
      title: "Convert div soup to semantic HTML",
      difficulty: 1,
      description: "Take the provided div-heavy markup and rewrite it using header, nav, main, article, footer.",
      requirements: [
        "Use <header> for the top section",
        "Use <nav> for the link list",
        "Use <main> for the central content",
        "Use <article> for the post",
        "Use <footer> for the bottom section",
      ],
      starterCode: { html: `<div class="header">\n  <div class="title">My Blog</div>\n  <div class="nav">\n    <a href="/">Home</a> <a href="/about">About</a>\n  </div>\n</div>\n<div class="main">\n  <div class="article">\n    <div class="post-title">Hello World</div>\n    <div class="post-body">My first post.</div>\n  </div>\n</div>\n<div class="footer">© 2026</div>` },
      hints: [
        "Replace <div class='header'> with <header>",
        "Don't forget <h1> and <h2> instead of <div class='title'>",
        "Wrap the nav links in <nav>",
      ],
      solution: { html: `<header>\n  <h1>My Blog</h1>\n  <nav>\n    <a href="/">Home</a> <a href="/about">About</a>\n  </nav>\n</header>\n<main>\n  <article>\n    <h2>Hello World</h2>\n    <p>My first post.</p>\n  </article>\n</main>\n<footer>© 2026</footer>` },
      solutionExplanation: "Each generic div became a meaningful tag. The class names are no longer needed because the tag itself carries the meaning.",
    },
    {
      id: "html12-ex2",
      title: "Blog homepage with multiple articles",
      difficulty: 2,
      description: "Build a homepage with a header, nav, main containing 3 article cards, an aside with a newsletter signup, and a footer.",
      requirements: [
        "<header> with <h1> site title and <nav>",
        "<main> with at least 3 <article> cards, each with its own <h2> and <p>",
        "<aside> with a newsletter <form>",
        "<footer> with copyright and 2 footer links",
      ],
      starterCode: { html: `<!DOCTYPE html>\n<html><body>\n  <!-- build the page -->\n</body></html>` },
      hints: [
        "Each article needs its own heading",
        "Wrap the form fields in a <form>",
        "Footer links can go in plain text or a small <ul>",
      ],
      solution: {
        html: `<!DOCTYPE html>\n<html><body>\n<header>\n  <h1>Tech Notes</h1>\n  <nav>\n    <a href="/">Home</a> | <a href="/archive">Archive</a> | <a href="/about">About</a>\n  </nav>\n</header>\n\n<main>\n  <article>\n    <h2>Why Semantic HTML Wins</h2>\n    <p>An overview of the why and how.</p>\n  </article>\n  <article>\n    <h2>CSS Grid Cheat Sheet</h2>\n    <p>The shapes you'll use 80% of the time.</p>\n  </article>\n  <article>\n    <h2>Async/Await for Mortals</h2>\n    <p>Promises explained without jargon.</p>\n  </article>\n\n  <aside>\n    <h2>Newsletter</h2>\n    <form>\n      <input type="email" placeholder="you@example.com" required>\n      <button>Subscribe</button>\n    </form>\n  </aside>\n</main>\n\n<footer>\n  <p>© 2026 Tech Notes</p>\n  <a href="/privacy">Privacy</a> · <a href="/terms">Terms</a>\n</footer>\n</body></html>`,
      },
      solutionExplanation: "A complete blog homepage with five landmarks. Each article stands alone. Aside is for tangential content. Footer holds legal/contact.",
    },
    {
      id: "html12-ex3",
      title: "Recipe page with figure, time, and sections",
      difficulty: 3,
      description: "Build a recipe page with: header, main containing one article (the recipe). The article must include a figure with the dish photo, a <time> for the publish date, and two <section>s — Ingredients and Steps.",
      requirements: [
        "<article> wraps the entire recipe",
        "<figure> + <figcaption> for the image",
        "<time datetime='2026-04-22'> showing publish date",
        "Two <section>s with <h2> headings",
        "Page footer with author <address>",
      ],
      starterCode: { html: `<!DOCTYPE html>\n<html><body>\n  <!-- build recipe -->\n</body></html>` },
      hints: [
        "<figure><img alt='...'><figcaption>caption</figcaption></figure>",
        "<time datetime='YYYY-MM-DD'>April 22, 2026</time>",
        "<address> is for contact info, often inside footer",
      ],
      solution: {
        html: `<!DOCTYPE html>\n<html><body>\n<header>\n  <h1>Cook With Me</h1>\n  <nav><a href="/">Home</a> | <a href="/recipes">Recipes</a></nav>\n</header>\n\n<main>\n  <article>\n    <header>\n      <h2>Classic Margherita Pizza</h2>\n      <p>Posted on <time datetime="2026-04-22">April 22, 2026</time></p>\n    </header>\n\n    <figure>\n      <img src="margherita.jpg" alt="Margherita pizza fresh from the oven">\n      <figcaption>Fresh mozzarella, basil, and a thin crust.</figcaption>\n    </figure>\n\n    <section>\n      <h3>Ingredients</h3>\n      <ul>\n        <li>500g 00 flour</li>\n        <li>300ml warm water</li>\n        <li>San Marzano tomatoes</li>\n        <li>Fresh mozzarella</li>\n        <li>Fresh basil</li>\n      </ul>\n    </section>\n\n    <section>\n      <h3>Steps</h3>\n      <ol>\n        <li>Mix flour and water; rest for 24 hours.</li>\n        <li>Stretch the dough; top with sauce and cheese.</li>\n        <li>Bake at 500°F for 8 minutes.</li>\n      </ol>\n    </section>\n\n    <footer>\n      <address>By <a href="/author/alex">Alex</a> · <a href="mailto:alex@example.com">email</a></address>\n    </footer>\n  </article>\n</main>\n\n<footer>\n  <p>© 2026 Cook With Me</p>\n</footer>\n</body></html>`,
      },
      solutionExplanation: "Article wraps the whole recipe. Internal header for the title and time. Figure groups image and caption. Two sections for ingredients and steps. Article footer holds author address. Page footer holds copyright.",
    },
  ],
  quiz: {
    passingScore: 80,
    questions: [
      { id: "html12-q1", type: "mcq", question: "How many <main> elements should a page have?", options: ["Zero", "Exactly one", "One per section", "As many as needed"], correctAnswer: 1, explanation: "Exactly one <main> per page, containing the unique main content.", difficulty: 1 },
      { id: "html12-q2", type: "mcq", question: "Which is the right tag for a self-contained blog post?", options: ["<section>", "<article>", "<div>", "<main>"], correctAnswer: 1, explanation: "<article> is for self-contained, distributable content. A blog post fits perfectly.", difficulty: 1 },
      { id: "html12-q3", type: "true-false", question: "Switching from <div class='header'> to <header> changes the visual appearance of the page.", options: ["True", "False"], correctAnswer: 1, explanation: "False. Both default to display: block. The change is invisible to the eye but huge for accessibility and SEO.", difficulty: 2 },
      { id: "html12-q4", type: "mcq", question: "When should you use a <div>?", options: ["Never — always pick a semantic tag", "Always wrap content in <div> for safety", "When no semantic tag fits and you need a generic wrapper for layout/styling", "Only inside <main>"], correctAnswer: 2, explanation: "<div> is the right choice when there's no meaning to convey — purely visual or structural wrappers.", difficulty: 2 },
      { id: "html12-q5", type: "spot-the-bug", question: "What's wrong here?", code: `<main>\n  <h1>About</h1>\n</main>\n<main>\n  <h1>Contact</h1>\n</main>`, options: ["Nothing", "Two <main> elements on the same page is invalid HTML", "<h1> can't be inside <main>", "Need <article> wrappers"], correctAnswer: 1, explanation: "A page must have exactly one <main>. For separate pages, render only one main per page.", difficulty: 2 },
      { id: "html12-q6", type: "mcq", question: "What does <time datetime='2026-04-22'>April 22, 2026</time> do?", options: ["Just visual styling", "Provides a machine-readable date alongside human text — used by SEO and tools", "Schedules the page to publish on that date", "Creates a clock"], correctAnswer: 1, explanation: "The datetime attribute is the machine-readable form. Search engines use it for article dates; calendars can extract it.", difficulty: 2 },
      { id: "html12-q7", type: "mcq", question: "Which is NOT a typical use of <aside>?", options: ["Sidebar with related links", "A pull quote in an article", "An advertisement", "The main article body"], correctAnswer: 3, explanation: "<aside> is for tangentially-related content. The main article body belongs in <article>/<main>.", difficulty: 2 },
      { id: "html12-q8", type: "code-output", question: "Which tag pair is best for an image with a caption?", options: ["<div><img><p>caption</p></div>", "<figure><img><figcaption>caption</figcaption></figure>", "<picture><img><caption>caption</caption></picture>", "<img caption='...'>"], correctAnswer: 1, explanation: "<figure> + <figcaption> semantically associates the image with its caption. Screen readers announce them together.", difficulty: 2 },
    ],
  },
  cheatSheet: [
    { label: "Page top", value: "<header>" },
    { label: "Site nav", value: "<nav>" },
    { label: "Main content", value: "<main> (one per page)" },
    { label: "Standalone post", value: "<article>" },
    { label: "Themed grouping", value: "<section> (with heading)" },
    { label: "Tangential content", value: "<aside>" },
    { label: "Page bottom", value: "<footer>" },
    { label: "Image + caption", value: "<figure><figcaption>" },
    { label: "Date/time", value: "<time datetime='YYYY-MM-DD'>" },
    { label: "Author contact", value: "<address>" },
    { label: "Generic block", value: "<div> (last resort)" },
    { label: "Generic inline", value: "<span>" },
  ],
};
