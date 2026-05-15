# CODEMASTERY — PHP TRACK ADDITION
# Add PHP as a new track to the existing CodeMastery platform
# 90+ chapters · Absolute Zero to Professional PHP
# Reference: https://www.w3schools.com/php/php_ref_overview.asp
# Covers ALL function categories: Array, String, Math, Date, Filesystem,
# MySQLi, Regex, JSON, Filter, Mail, Network, Output Control, Misc, Zip, and more

## OVERVIEW

Extend the existing CodeMastery platform (Next.js 14 + TypeScript + Tailwind) by adding a complete PHP learning track. Follow ALL existing design patterns, data structures, component conventions, and curriculum depth standards established across all previous tracks.

PHP powers over 77% of all websites with known server-side languages (WordPress, Facebook originally, Wikipedia, Laravel apps). This track starts from absolute zero — a student who only knows basic HTML can begin here — and goes all the way to OOP, MySQLi database integration, REST APIs, and modern PHP 8 features.

CROSS-LANGUAGE AWARENESS: Show "🔗 Language Bridge" callouts in chapters where concepts exist in previously taught languages:
- "If you know JavaScript: PHP runs on the SERVER — the user never sees PHP code, only its HTML output."
- "If you know Python: PHP syntax uses $ for variables, similar dynamic typing, but with semicolons and curly braces."
- "If you know C/C++/Java: PHP borrows its syntax heavily — curly braces, semicolons, similar operators."

---

## PHP COMPILER SETUP

PHP runs on a server, not in the browser. Use the Piston API for execution.

Implementation for /components/compiler/PhpCompiler.tsx:

Primary — Piston API:
- POST https://emkc.org/api/v2/piston/execute
- Payload: { language: "php", version: "8.2.3", files: [{ name: "index.php", content: userCode }], stdin: userInput }
- Response: { run: { stdout, stderr, code } }

Compiler UI (/components/compiler/PhpCompiler.tsx):
- Left panel (55%): PHP editor (CodeMirror 6 with @codemirror/lang-php)
- Right panel (45%): three tabs — Output | Errors | HTML Preview
- HTML Preview tab: if the PHP output contains HTML tags, render it in an iframe (srcdoc) so the user sees the actual rendered HTML output — very important for PHP HTML-generation lessons
- stdin tab: for fgets(STDIN) / readline() input — user pre-fills values
- Show "Running on PHP 8.2..." spinner during execution
- Parse PHP error format: "Fatal error: Uncaught Error: ... in /code/index.php:5" → highlight line 5
- "Run" button (Ctrl+Enter), "Clear Output", "Reset Code", "Copy Code"
- Template dropdown: Hello World, HTML Page Generator, Form Handler, MySQL Connect, JSON API

---

## CURRICULUM DATA STRUCTURE

Add to /lib/curriculum/php-curriculum.ts following existing TypeScript interfaces.
Add "php" to Track type union in types.ts.

Track metadata:
- id: "php"
- title: "PHP"
- tagline: "The web's most popular server-side language"
- icon: "🐘"
- color: "#8892BF"
- totalChapters: 90
- estimatedHours: 130

---

## SPECIAL COMPONENT — PhpFunctionRef

Build /components/lesson/PhpFunctionRef.tsx — unique to PHP track:
Shows for every PHP function covered:
1. Function signature with parameter types: string substr(string $str, int $start, ?int $length = null)
2. Parameters table: name | type | required/optional | description
3. Return value: type + what it returns
4. Live runnable example in mini PHP compiler
5. Common use cases (bullet list)
6. Common mistakes and gotchas
7. Related functions (links)
8. PHP version this was introduced

Used in EVERY section that covers a PHP built-in function.

---

## FULL CURRICULUM — 90 CHAPTERS

=== PART 1: PHP BASICS (Chapters 1–10) ===

Chapter 1: What Is PHP and How Does the Web Work?
Difficulty: Absolute Beginner | XP: 100 | Time: 30 min

Learning objectives:
- Understand what server-side vs client-side means
- Know what PHP is and where it runs
- Set up a local PHP development environment
- Write and run the very first PHP file
- Understand how PHP generates HTML

Sections (400–600 words each, zero placeholders, full real content):

1.1 — Client-Side vs Server-Side: The Core Difference
Real-world analogy: A restaurant menu (HTML/CSS) is what you see as a customer. The kitchen (PHP server) is where the actual food (data, logic) is prepared. You never see the kitchen — you only receive the finished dish (rendered HTML). PHP is the kitchen.

Content: When you visit a website, your browser sends a REQUEST to a server. If the server has PHP, it executes the PHP code FIRST, generates HTML from it, then sends ONLY the HTML back to your browser. Your browser never sees the PHP code — only its output. This is fundamentally different from JavaScript (which runs in YOUR browser, client-side). PHP is used for: generating dynamic HTML pages, handling form submissions, talking to databases (MySQL), authenticating users, sending emails, processing payments, building REST APIs, and running WordPress (which powers 43% of ALL websites). PHP is what runs when you log into almost any website — it checks your username and password against a database and decides if you can access the page.

1.2 — PHP History and Versions
PHP was created by Rasmus Lerdorf in 1994 as "Personal Home Page tools". It evolved dramatically: PHP 3 (1997 — first real release), PHP 4, PHP 5 (2004 — OOP), PHP 7 (2015 — 2x speed boost), PHP 8.0 (2020 — JIT compiler, named arguments, match expression, nullsafe operator), PHP 8.1 (2021 — enums, fibers, readonly properties), PHP 8.2 (2022 — readonly classes, Disjunctive Normal Form types), PHP 8.3 (2023 — typed class constants, json_validate()). Always use PHP 8.x in new projects.

1.3 — Setting Up Local Development
Option A — XAMPP (Windows/Mac/Linux): Install from apachefriends.org. Includes Apache (web server) + PHP + MySQL. Start Apache in XAMPP Control Panel. Create files in C:/xampp/htdocs/ (Windows) or /Applications/XAMPP/htdocs/ (Mac). Access via http://localhost/yourfile.php.
Option B — Laragon (Windows, recommended): Faster, cleaner than XAMPP. Download from laragon.org.
Option C — PHP Built-in Server (any OS with PHP installed): php -S localhost:8000 in any directory. Best for quick testing.
Option D — Docker: docker run -p 8080:80 -v $(pwd):/var/www/html php:8.2-apache.
Install VS Code PHP extensions: PHP Intelephense (code intelligence), PHP Debug (Xdebug integration).

1.4 — First PHP File
Create index.php in your htdocs folder:
```php
<?php
echo "Hello, World!";
echo "<br>";
echo "PHP version: " . PHP_VERSION;
?>
```
Every character explained:
- <?php — PHP opening tag. Tells the server "PHP code starts here".
- echo — outputs text/HTML to the browser. Like print in Python or console.log in JS (but it goes to the browser, not a console).
- "Hello, World!" — string literal in double quotes. Single quotes also work (slight difference — later).
- . — the string concatenation operator in PHP (NOT + like JavaScript).
- PHP_VERSION — a PHP predefined constant. No $ sign (constants don't have $).
- ; — every PHP statement MUST end with semicolon. Required, unlike Python.
- ?> — PHP closing tag. Optional if the file is pure PHP (recommended to omit at end of pure PHP files).

1.5 — PHP and HTML: Mixing Them
```php
<!DOCTYPE html>
<html>
<body>
<?php
$name = "CodeMastery";
$year = date("Y");
echo "<h1>Welcome to $name</h1>";
echo "<p>Current year: $year</p>";
?>
</body>
</html>
```
PHP can be embedded ANYWHERE in HTML. The server processes PHP tags, replaces them with output, and sends pure HTML to the browser. Variables inside double-quoted strings are auto-interpolated ($name becomes its value). date("Y") returns the current year — first taste of PHP's built-in functions.

Quiz (8 questions with full detailed explanations):
Q1 (MCQ): Where does PHP code execute? A) In the browser B) On the user's computer C) On the web server D) In a database — Answer: C — PHP is a server-side language. The web server (Apache/Nginx) processes PHP code and sends only the resulting HTML to the browser. The user never sees PHP code.
Q2 (True/False): PHP is a client-side language like JavaScript. — Answer: False — PHP runs on the server. JavaScript runs in the browser. Both can exist on the same page but they serve different roles and run in different places.
Q3 (Fill blank): In PHP, the string concatenation operator is ___. — Answer: . (dot) — Unlike JavaScript which uses + for concatenation, PHP uses a dot. "Hello" . " World" = "Hello World".
Q4 (Code output): What does echo PHP_VERSION; print? Answer: The current PHP version number (e.g., 8.2.3) — Explanation: PHP_VERSION is a predefined constant that contains the current PHP version string.
Q5 (Spot the bug): <?php echo "Hello World" ?> — Bug: missing semicolon after "Hello World". PHP requires a semicolon at the end of every statement.
Q6 (MCQ): What percentage of websites use PHP? A) 10% B) 30% C) 55% D) 77% — Answer: D
Q7 (MCQ): Which of these is NOT a valid way to run PHP locally? A) XAMPP B) PHP built-in server C) Open .php file directly in browser D) Docker — Answer: C — You cannot open a .php file directly in a browser. PHP must be executed by a server (Apache, Nginx, or PHP's built-in server). Double-clicking a .php file shows the raw PHP code.
Q8 (True/False): The PHP closing tag ?> is required at the end of a pure PHP file. — Answer: False — For files containing only PHP code, it is actually RECOMMENDED to omit the closing ?> tag to prevent accidental whitespace being sent before headers.

Exercises:
Exercise 1 (Easy): Create a PHP file that outputs a complete HTML page with your name as the title, an h1 heading, and today's date using the date() function.
Exercise 2 (Easy): Write PHP that outputs an HTML unordered list of 5 programming languages using echo with HTML tags.
Exercise 3 (Medium): Create a PHP file that uses PHP_OS, PHP_VERSION, PHP_INT_MAX, PHP_EOL, and PHP_MAJOR_VERSION constants to display a system information page styled with inline CSS.

---

Chapter 2: Variables, Data Types, and Constants
2.1 — PHP Variables (the $ sign)
Every PHP variable starts with $. No declaration keyword (no var/let/const/int — just $name = value). PHP is dynamically typed like Python — the type is determined by the value. Variable names: case-sensitive, start with letter or underscore (not a number), no spaces.
```php
$name = "Alice";        // string
$age = 25;              // integer
$price = 19.99;         // float
$isActive = true;       // boolean
$nothing = null;        // null
```

2.2 — PHP's 8 Data Types
Scalar types: string, integer, float (aka double), boolean.
Compound types: array, object.
Special types: null, resource (file handles, DB connections).
gettype($var) — returns the type as a string.
var_dump($var) — shows type AND value (essential debugging tool).
is_string(), is_int(), is_float(), is_bool(), is_array(), is_null(), is_numeric().

2.3 — String Details: Single vs Double Quotes
Single quotes: NO variable interpolation, NO escape sequences (except \' and \\). Faster for simple strings.
Double quotes: variable interpolation ($name embedded directly), escape sequences (\n, \t, \r, \$, \").
Heredoc syntax (like Python's triple quotes, with interpolation).
Nowdoc syntax (like single-quoted heredoc — no interpolation).
```php
$name = "World";
echo 'Hello $name';   // Outputs: Hello $name (literal)
echo "Hello $name";   // Outputs: Hello World (interpolated)
echo "Hello {$name}"; // Outputs: Hello World (explicit interpolation — recommended)
```

2.4 — Constants: define() and const
```php
define('MAX_SIZE', 100);       // Runtime constant
const DB_HOST = 'localhost';   // Compile-time constant (class-level too)
echo MAX_SIZE;                  // No $ sign for constants!
```
PHP predefined constants: PHP_VERSION, PHP_OS, PHP_EOL, PHP_INT_MAX, PHP_INT_MIN, PHP_FLOAT_MAX, PHP_FLOAT_EPSILON, PHP_MAJOR_VERSION, PHP_MINOR_VERSION, TRUE, FALSE, NULL, E_ERROR, E_WARNING, E_NOTICE, E_ALL, SORT_ASC, SORT_DESC.
Magic constants (change depending on context): __FILE__, __DIR__, __LINE__, __FUNCTION__, __CLASS__, __METHOD__, __NAMESPACE__, __TRAIT__.

2.5 — Variable Variables and Variable Inspection
$$varName — a variable whose name is stored in another variable. var_dump() — full dump with type and value. print_r() — human-readable dump (arrays/objects). isset() — check if variable exists and is not null. empty() — check if variable is "empty" (false, 0, "", "0", [], null). unset() — destroy a variable.

[Continue this EXACT depth for all 90 chapters...]

---

Chapter 3: Operators — All Types (Arithmetic, Comparison, Logical, String, Array)
Chapter 4: Control Flow — if/elseif/else, switch, match (PHP 8)
Chapter 5: Loops — while, do-while, for, foreach, break, continue
Chapter 6: Functions — Declaration, Parameters, Return, Type Declarations (PHP 7+)
Chapter 7: Variable Scope — local, global, static, superglobals
Chapter 8: Include and Require — Code Organization
Chapter 9: Error Handling — set_error_handler, try/catch, finally, custom exceptions
Chapter 10: Superglobals — $_GET, $_POST, $_SERVER, $_SESSION, $_COOKIE, $_FILES, $_ENV, $_GLOBALS

=== PART 2: STRING FUNCTIONS — COMPLETE REFERENCE (Chapters 11–16) ===

Chapter 11: String Functions — Part 1 (Creation and Information)
Cover every function with PhpFunctionRef component:
strlen($str) — Returns length of string
str_word_count($str) — Count words
str_repeat($str, $times) — Repeat a string
str_pad($str, $len, $pad, $type) — Pad string to length
wordwrap($str, $width, $break) — Wrap string at word boundaries
chunk_split($str, $chunklen, $end) — Split into chunks
number_format($num, $decimals, $dec_point, $thousands_sep) — Format numbers
sprintf($format, ...$values) — Format string (like printf in C)
printf($format, ...$values) — Print formatted string
sscanf($str, $format) — Parse string according to format
ord($char) — Get ASCII value of character
chr($ascii) — Get character from ASCII value
bin2hex($str), hex2bin($hex) — Binary/hex conversion
base64_encode($str), base64_decode($str) — Base64 encoding
quoted_printable_encode, quoted_printable_decode

Chapter 12: String Functions — Part 2 (Search and Replace)
strpos($haystack, $needle, $offset) — Find first occurrence position
strrpos($haystack, $needle) — Find last occurrence position
stripos($haystack, $needle) — Case-insensitive strpos
str_contains($haystack, $needle) — PHP 8+ — check if contains
str_starts_with($haystack, $needle) — PHP 8+
str_ends_with($haystack, $needle) — PHP 8+
substr_count($haystack, $needle) — Count occurrences
substr($str, $start, $length) — Extract substring
str_replace($search, $replace, $subject) — Replace all occurrences
str_ireplace($search, $replace, $subject) — Case-insensitive replace
substr_replace($str, $replace, $start, $length) — Replace part of string
preg_replace($pattern, $replacement, $subject) — Regex replace
preg_match($pattern, $subject, $matches) — Regex search
preg_match_all($pattern, $subject, $matches) — All regex matches
preg_split($pattern, $subject) — Split by regex

Chapter 13: String Functions — Part 3 (Transformation)
strtolower($str), strtoupper($str) — Case change
ucfirst($str), lcfirst($str) — First char case
ucwords($str, $delimiters) — Capitalize each word
ltrim($str, $chars), rtrim($str, $chars), trim($str, $chars) — Strip whitespace
str_split($str, $length) — Split string into array
explode($delimiter, $str, $limit) — Split by delimiter
implode($separator, $array), join() — Join array into string
strrev($str) — Reverse string
str_rot13($str) — ROT13 encoding
md5($str), sha1($str), hash($algo, $str) — Hash functions
crc32($str) — CRC32 checksum
htmlspecialchars($str, $flags) — Escape HTML entities (XSS prevention — critical)
htmlspecialchars_decode($str) — Reverse
htmlentities($str), html_entity_decode($str)
strip_tags($str, $allowable_tags) — Remove HTML tags
addslashes($str), stripslashes($str) — Escape/unescape quotes
nl2br($str) — Insert <br> before newlines
wordwrap($str, $width, $break, $cut_long_words)

Chapter 14: String Functions — Part 4 (Comparison and Padding)
strcmp($str1, $str2), strncmp(), strcasecmp(), strncasecmp() — String comparison
similar_text($str1, $str2, $percent) — Similarity percentage
levenshtein($str1, $str2) — Edit distance
soundex($str), metaphone($str) — Phonetic algorithms
str_pad($str, $length, $pad_str, $pad_type) — Pad with STR_PAD_LEFT/RIGHT/BOTH
number_format($num, $decimals, $decimal_separator, $thousands_separator)
money_format (deprecated, use NumberFormatter)
setlocale($category, $locale) — Set locale for localization

Chapter 15: String Functions — Part 5 (Multibyte and Encoding)
mb_strlen($str, $encoding) — Multibyte string length
mb_strtolower, mb_strtoupper — Multibyte case
mb_substr($str, $start, $length, $encoding) — Multibyte substr
mb_strpos, mb_strrpos — Multibyte positions
mb_convert_encoding($str, $to, $from) — Convert encoding
mb_detect_encoding($str) — Detect encoding
mb_internal_encoding($encoding) — Set internal encoding
iconv($from, $to, $str) — iconv conversion
urlencode($str), urldecode($str) — URL encoding
rawurlencode($str), rawurldecode($str) — RFC 3986 encoding
http_build_query($data, $prefix, $sep) — Build URL query string
parse_str($str, &$output) — Parse query string into variables

Chapter 16: Regular Expressions in PHP — Complete Guide
preg_match, preg_match_all, preg_replace, preg_replace_callback, preg_split, preg_grep, preg_quote.
PCRE patterns: delimiters, modifiers (i, m, s, x, u, g), character classes, quantifiers, groups, lookahead/lookbehind, named groups (?P<name>...).
Practical examples: validate email, validate phone, extract URLs, parse dates, sanitize input.

=== PART 3: ARRAY FUNCTIONS — COMPLETE REFERENCE (Chapters 17–22) ===

Chapter 17: Array Basics and Creation Functions
array(), range(), array_fill(), array_fill_keys(), array_combine(), array_chunk().
Indexed vs associative vs multidimensional arrays.
Short array syntax [] (PHP 5.4+).
list() and [] destructuring assignment.
array_key_exists(), isset() for array keys, in_array(), array_search().
count($array), sizeof($array) — count elements.
array_count_values($array) — count frequency of each value.

Chapter 18: Array Manipulation Functions
array_push(), array_pop(), array_shift(), array_unshift() — Stack/queue operations.
array_splice($array, $offset, $length, $replacement) — Remove/replace elements.
array_slice($array, $offset, $length, $preserve_keys) — Extract slice.
array_merge(...$arrays) — Merge arrays (numeric keys re-indexed, string keys overwritten).
array_merge_recursive() — Deep merge.
array_combine($keys, $values) — Create from keys+values arrays.
array_pad($array, $size, $value) — Pad array.
array_unique($array) — Remove duplicate values.
array_flip($array) — Swap keys and values.
array_reverse($array, $preserve_keys) — Reverse order.
compact($var1, $var2, ...) — Create array from variables.
extract($array, $flags) — Extract array into variables.

Chapter 19: Array Sorting Functions
sort($array), rsort($array) — Sort indexed (re-indexes keys).
asort($array), arsort($array) — Sort associative (preserve keys).
ksort($array), krsort($array) — Sort by key.
usort($array, $callback) — User-defined sort for values.
uasort($array, $callback) — User-defined sort (preserve keys).
uksort($array, $callback) — User-defined sort by keys.
natsort($array), natcasesort($array) — Natural order sorting.
array_multisort() — Sort multiple arrays or multi-dimensional.
shuffle($array) — Random shuffle.
SORT_REGULAR, SORT_NUMERIC, SORT_STRING, SORT_LOCALE_STRING, SORT_NATURAL, SORT_FLAG_CASE flags.

Chapter 20: Array Search and Filter Functions
array_filter($array, $callback, $mode) — Filter elements by callback.
array_map($callback, $array, ...$arrays) — Apply callback to each element.
array_walk($array, $callback, $userdata) — Walk through array (modifies in-place).
array_walk_recursive($array, $callback) — Recursive walk.
array_reduce($array, $callback, $initial) — Reduce to single value.
array_keys($array, $value, $strict) — Get all keys (optionally search by value).
array_values($array) — Get all values (re-indexed).
array_column($array, $column_key, $index_key) — Extract column from 2D array.
array_diff($array1, $array2, ...) — Values in array1 not in others.
array_diff_assoc() — Diff with key comparison.
array_diff_key() — Diff by keys.
array_intersect($array1, $array2, ...) — Values in ALL arrays.
array_intersect_assoc(), array_intersect_key().

Chapter 21: Array Math and Misc Functions
array_sum($array) — Sum of all values.
array_product($array) — Product of all values.
min($array), max($array) — Min/max value.
array_rand($array, $num) — Random key(s).
shuffle($array) — Random shuffle (modifies in-place).
array_map(null, $arr1, $arr2) — Zip arrays together.
implode/explode (already in string chapter — cross-reference).
compact(), extract().
array_key_first($array), array_key_last($array) — PHP 7.3+.
array_is_list($array) — PHP 8.1+ — check if array is a list (0-indexed sequential).

Chapter 22: Multidimensional Arrays and Array Patterns
Creating 2D arrays (tables of data). Accessing nested elements. array_column on 2D. usort on 2D. array_map on 2D. Real-world patterns: list of users, products, database rows. Converting database results to nested arrays. JSON encode/decode round-trip with arrays. Building data structures (stack, queue, graph, tree) using arrays.

=== PART 4: MATH AND NUMBER FUNCTIONS (Chapter 23) ===

Chapter 23: Math Functions — Complete Reference
abs($num) — Absolute value
ceil($num) — Round up to nearest integer
floor($num) — Round down
round($num, $precision, $mode) — Round with precision and mode (PHP_ROUND_HALF_UP etc.)
fmod($x, $y) — Floating point modulo
intdiv($dividend, $divisor) — Integer division (PHP 7+)
pow($base, $exp) — Power (also ** operator)
sqrt($num) — Square root
exp($num) — e^x
log($num, $base) — Logarithm
log10($num), log2($num) — Base-10, base-2 log
max($val1, $val2, ...) or max($array) — Maximum
min($val1, $val2, ...) or min($array) — Minimum
pi() — π constant (also M_PI)
sin($rad), cos($rad), tan($rad) — Trig functions (radians)
asin($num), acos($num), atan($num), atan2($y, $x) — Inverse trig
deg2rad($degrees), rad2deg($radians) — Convert
hypot($x, $y) — Hypotenuse
bindec($bin), octdec($oct), hexdec($hex), decoct($dec), dechex($dec), decbin($dec) — Base conversion
base_convert($num, $from_base, $to_base) — Any base conversion
rand($min, $max), mt_rand($min, $max) — Random (mt_rand is better)
random_int($min, $max) — Cryptographically secure random (PHP 7+)
shuffle vs array_rand vs random_int — when to use which
PHP_INT_MAX, PHP_INT_MIN, PHP_FLOAT_MAX, PHP_FLOAT_EPSILON, PHP_FLOAT_DIG constants
intval($var, $base), floatval($var), strval($var), boolval($var) — Type casting functions
number_format(), money_format (deprecated) — Formatting numbers for display

=== PART 5: DATE AND TIME FUNCTIONS (Chapters 24–25) ===

Chapter 24: Date Functions — Core Reference
date($format, $timestamp) — Format a date. ALL format characters:
d (day 01-31), D (Mon-Sun), j (day 1-31 no leading zero), l (Monday-Sunday),
N (1=Mon, 7=Sun), w (0=Sun, 6=Sat), z (day of year 0-365),
W (ISO week number), F (January-December), m (01-12), M (Jan-Dec),
n (1-12 no leading zero), t (days in month 28-31),
L (leap year 0/1), o (ISO year), Y (4-digit year), y (2-digit year),
a (am/pm), A (AM/PM), B (Swatch beat time),
g (12h no leading zero), G (24h no leading zero), h (12h 01-12), H (24h 00-23),
i (minutes 00-59), s (seconds 00-59), u (microseconds), v (milliseconds),
e (timezone id), I (daylight saving), O (offset +0200), P (+02:00), T (EST), Z (offset seconds),
c (ISO 8601 full), r (RFC 2822), U (Unix timestamp).
time() — current Unix timestamp.
mktime($h, $m, $s, $month, $day, $year) — Create timestamp.
strtotime($str, $baseTimestamp) — Parse any date string to timestamp. Very powerful: strtotime("+1 week"), strtotime("next Monday"), strtotime("last day of this month").
checkdate($month, $day, $year) — Validate a date.
date_create($str), date_format($date, $format), date_modify($date, $modifier), date_diff($date1, $date2) — OOP DateTime functions.

Chapter 25: DateTime Class — OOP Date Handling
new DateTime($str, $timezone), new DateTimeImmutable() — Create objects.
$dt->format($format), $dt->modify($str), $dt->diff($other), $dt->getTimestamp().
new DateTimeZone($tz), $dt->setTimezone($tz).
DateInterval class — P1Y2M3DT4H5M6S format.
date_interval_create_from_date_string().
DatePeriod — iterate over date ranges.
timezone_identifiers_list() — all timezone names.
date_default_timezone_set($tz) — set default timezone.

=== PART 6: FILESYSTEM FUNCTIONS (Chapters 26–28) ===

Chapter 26: File Reading and Writing
fopen($filename, $mode) — Open file. Modes: r, r+, w, w+, a, a+, x, x+, c, c+, b (binary).
fclose($handle) — Always close after opening.
fread($handle, $length) — Read bytes.
fwrite($handle, $str, $length) — Write bytes.
fgets($handle, $length) — Read one line.
fgetcsv($handle, $length, $sep) — Read CSV line.
fputcsv($handle, $array, $sep) — Write CSV line.
feof($handle) — Check end of file.
rewind($handle) — Reset file pointer.
fseek($handle, $offset, $whence) — Move pointer.
ftell($handle) — Current pointer position.
ftruncate($handle, $size) — Truncate file.
file_get_contents($filename, $use_include_path, $context, $offset, $maxlen) — Read entire file to string.
file_put_contents($filename, $data, $flags) — Write string to file. Flags: FILE_APPEND, LOCK_EX.
file($filename, $flags) — Read file into array of lines.
readfile($filename) — Read and output file directly.
file_exists($filename), is_file($filename), is_dir($filename), is_readable($filename), is_writable($filename), is_executable($filename).
filesize($filename), filetype($filename), filemtime($filename), fileatime($filename), filectime($filename).

Chapter 27: Directory and Path Functions
mkdir($path, $mode, $recursive), rmdir($path), opendir($path), readdir($handle), closedir($handle).
scandir($dir, $sorting_order) — Get directory contents as array.
glob($pattern, $flags) — Match filenames by pattern.
realpath($path) — Resolve to absolute path.
dirname($path), basename($path, $suffix), pathinfo($path, $option).
getcwd() — Current working directory. chdir($dir) — Change directory.
copy($src, $dst), rename($src, $dst), unlink($filename) — File operations.
symlink($target, $link), readlink($path) — Symbolic links.
tempnam($dir, $prefix), sys_get_temp_dir() — Temporary files.
disk_free_space($path), disk_total_space($path) — Disk info.

Chapter 28: File Upload Handling
$_FILES superglobal: name, type, size, tmp_name, error constants (UPLOAD_ERR_OK etc.).
is_uploaded_file($tmp_name), move_uploaded_file($tmp_name, $dest) — Secure upload.
File validation: check type (mime), check size, check extension. Never trust $_FILES['type'] — use finfo_file() instead.
Complete secure file upload implementation.

=== PART 7: FORMS AND HTTP (Chapters 29–32) ===

Chapter 29: Handling HTML Forms — GET and POST
$_GET vs $_POST vs $_REQUEST. When to use GET vs POST. Form action and method. htmlspecialchars() for XSS prevention — always sanitize output. filter_input(INPUT_POST, 'field', FILTER_SANITIZE_SPECIAL_CHARS). PHP_EOL. Reading checkboxes, radio buttons, multi-select.

Chapter 30: Form Validation — Complete Guide
Required fields, email validation (filter_var($email, FILTER_VALIDATE_EMAIL)), URL validation, numeric validation (is_numeric, filter_var with FILTER_VALIDATE_INT/FLOAT), regex validation. PHP Filter functions: filter_var(), filter_input(), filter_var_array(), filter_input_array(). All FILTER_ constants: FILTER_VALIDATE_EMAIL, FILTER_VALIDATE_URL, FILTER_VALIDATE_IP, FILTER_VALIDATE_INT, FILTER_VALIDATE_FLOAT, FILTER_VALIDATE_BOOLEAN. FILTER_SANITIZE_* constants.

Chapter 31: Sessions and Cookies
session_start(), $_SESSION, session_id(), session_destroy(), session_unset(), session_regenerate_id(). setcookie($name, $value, $expires, $path, $domain, $secure, $httponly), $_COOKIE. Cookie security: HttpOnly, Secure, SameSite flags. Session security: regenerate ID after login, session fixation attacks.

Chapter 32: Headers and Redirects
header($str) — Set HTTP header. Must be called BEFORE any output.
header("Location: /page.php") — Redirect. Always add exit; after.
header("Content-Type: application/json") — For JSON APIs.
http_response_code($code) — Set status code.
headers_sent($file, $line) — Check if headers already sent.
ob_start(), ob_end_clean(), ob_get_contents() — Output buffering (allows header() after output).

=== PART 8: OOP IN PHP (Chapters 33–42) ===

Chapter 33: Classes and Objects — Part 1
class keyword, new, $this, properties (public/private/protected), methods, constructor __construct(), destructor __destruct(), static properties and methods (::), class constants (const).

Chapter 34: Classes and Objects — Part 2
Inheritance (extends), method overriding, parent::, abstract classes and abstract methods, final classes and methods, interfaces (interface, implements, multiple interfaces), traits (trait, use, conflict resolution).

Chapter 35: Magic Methods — All __Methods
__construct, __destruct, __get($name), __set($name, $val), __isset($name), __unset($name), __call($name, $args), __callStatic, __toString, __invoke, __clone, __sleep, __wakeup, __serialize, __unserialize, __debugInfo. Practical use cases for each.

Chapter 36: PHP 8 OOP Features
Named arguments (PHP 8.0), Constructor property promotion (PHP 8.0), Match expression, Nullsafe operator (?->), Attributes (#[Attribute]), Enums (PHP 8.1), Readonly properties (PHP 8.1), Fibers (PHP 8.1), First class callables (PHP 8.1), Intersection types, Never return type, readonly classes (PHP 8.2), DNF types.

Chapter 37: Interfaces and Abstract Classes Deep Dive
Chapter 38: Traits — Code Reuse Without Inheritance
Chapter 39: Anonymous Classes, Closures as Objects
Chapter 40: Generators and yield in PHP
Chapter 41: SPL (Standard PHP Library) — SplStack, SplQueue, SplMinHeap, SplMaxHeap, SplFixedArray
Chapter 42: Design Patterns in PHP — Singleton, Factory, Observer, Repository, MVC

=== PART 9: DATABASE — MySQLi (Chapters 43–50) ===

Chapter 43: Introduction to Databases and MySQL
Chapter 44: MySQLi Connection — Object-Oriented Style
new mysqli($host, $user, $pass, $db), $mysqli->connect_error, $mysqli->connect_errno. Procedural style (mysqli_connect). Always check connection. $mysqli->close().

Chapter 45: MySQLi CRUD — SELECT, INSERT, UPDATE, DELETE
$mysqli->query($sql), $result->fetch_assoc(), $result->fetch_row(), $result->fetch_all(MYSQLI_ASSOC), $result->num_rows, $result->free(). $mysqli->affected_rows, $mysqli->insert_id.

Chapter 46: Prepared Statements — The ONLY Safe Way to Query
$stmt = $mysqli->prepare($sql), $stmt->bind_param($types, ...$vars), $stmt->execute(), $stmt->get_result(), $stmt->bind_result(), $stmt->fetch(). Why prepared statements prevent SQL injection. The $types string: "s"=string, "i"=integer, "d"=double, "b"=blob.

Chapter 47: MySQLi Transactions and Error Handling
$mysqli->autocommit(false), $mysqli->begin_transaction(), $mysqli->commit(), $mysqli->rollback(). $mysqli->errno, $mysqli->error, $mysqli->error_list.

Chapter 48: PDO — The Better Database Abstraction
new PDO($dsn, $user, $pass, $options), PDO::ATTR_ERRMODE, PDOException, $pdo->prepare(), $stmt->execute($params), $stmt->fetch(PDO::FETCH_ASSOC), $stmt->fetchAll(). Named placeholders (:name) vs positional (?). Multiple database support.

Chapter 49: Database Design Patterns in PHP
Repository pattern, Active Record pattern, query builder pattern. Pagination with LIMIT/OFFSET. Search and filter. One-to-many and many-to-many joins in PHP.

Chapter 50: MySQL Functions Reference
All MySQLi OOP methods: affected_rows, autocommit, begin_transaction, change_user, character_set_name, close, commit, connect, connect_errno, connect_error, data_seek, debug, dump_debug_info, errno, error, error_list, fetch_all, fetch_array, fetch_assoc, fetch_field, fetch_field_direct, fetch_fields, fetch_lengths, fetch_object, fetch_row, field_count, field_seek, get_charset, get_client_info, get_client_stats, get_client_version, get_connection_stats, get_host_info, get_proto_info, get_server_info, get_server_version, info, init, insert_id, kill, more_results, multi_query, next_result, options, ping, prepare, query, real_connect, real_escape_string, real_query, refresh, rollback, select_db, set_charset, ssl_set, stat, stmt_init, store_result, thread_id, use_result, warning_count.

=== PART 10: JSON, API, AND ADVANCED (Chapters 51–60) ===

Chapter 51: JSON in PHP — json_encode(), json_decode(), json_last_error(), json_last_error_msg(), JSON_PRETTY_PRINT, JSON_UNESCAPED_UNICODE, JSON_THROW_ON_ERROR (PHP 7.3+). Building a REST API endpoint. Consuming external APIs with file_get_contents + stream_context_create or cURL.

Chapter 52: cURL — HTTP Requests from PHP
curl_init(), curl_setopt(), curl_exec(), curl_close(), curl_error(), curl_getinfo(). All important CURLOPT_ constants. GET and POST requests. File uploads via cURL. Authentication. SSL verification.

Chapter 53: XML Parsing — SimpleXML and DOM
simplexml_load_string(), simplexml_load_file(), SimpleXMLElement methods. DOMDocument, DOMXPath. Converting between XML and arrays.

Chapter 54: PHP Output Control Functions
ob_start(), ob_end_clean(), ob_end_flush(), ob_get_contents(), ob_get_length(), ob_get_level(), ob_flush(), ob_clean(). Use cases: capture output, buffering for performance, header() workaround.

Chapter 55: PHP Network Functions
gethostbyname($host), gethostbyaddr($ip), dns_get_record($host, $type), ip2long($ip), long2ip($long), checkdnsrr($host, $type), getmxrr($host, $mxhosts). fsockopen() — raw socket connection. mail($to, $subject, $message, $headers) — sending email.

Chapter 56: PHP Misc Functions — Complete Reference
array_functions already covered. date already covered.
sleep($seconds), usleep($microseconds), time_nanosleep($sec, $nsec).
uniqid($prefix, $more_entropy) — Generate unique ID.
microtime($as_float) — Current time with microseconds (for benchmarking).
hrtime($as_num) — High resolution time (PHP 7.3+).
memory_get_usage($real), memory_get_peak_usage() — Memory profiling.
getmembers(), phpversion(), phpinfo() — PHP info.
define(), defined() — Constants.
eval($code) — NEVER use in production (security risk).
die($message), exit($status) — Terminate.
php_uname(), php_sapi_name() — System info.
highlight_string($code), highlight_file($file) — Syntax highlighting.
pack($format, ...$values), unpack($format, $data) — Binary data.
ignore_user_abort(), connection_aborted(), connection_status() — Connection control.

Chapter 57: Calendar Functions — All Reference
cal_days_in_month($calendar, $month, $year) — Days in month.
cal_from_jd($jd, $calendar) — Convert Julian Day to calendar.
cal_info($calendar) — Calendar information.
cal_to_jd($calendar, $month, $day, $year) — Convert to Julian Day.
easter_date($year), easter_days($year) — Easter calculation.
jdtogregorian($jd), gregoriantojd($month, $day, $year) — Julian/Gregorian.
jdtojewish, jdtojulian, jdtofrench, jewishtojd, juliantojd, frenchtojd.
unixtojd($ts), jdtounix($jd) — Unix/Julian conversion.

Chapter 58: Var Handling Functions — Complete Reference
gettype($var) — Get type name.
settype(&$var, $type) — Set type (modifies in-place).
intval($var, $base), floatval($var), strval($var), boolval($var), doubleval($var) — Convert.
is_array, is_bool, is_callable, is_countable, is_double, is_float, is_finite, is_infinite, is_int, is_integer, is_iterable, is_long, is_nan, is_null, is_numeric, is_object, is_real, is_resource, is_scalar, is_string — Type checking.
isset(&$var), empty(&$var), unset(&$var) — Variable state.
var_dump($var) — Full dump.
var_export($var, $return) — Export as PHP code.
print_r($var, $return) — Human-readable dump.
debug_zval_refcount() — Reference count.
serialize($value), unserialize($data) — PHP serialization (careful with unserialize — security risk).
get_defined_vars() — All variables in current scope.
compact($var1, ...), extract($array, $flags) — Variable manipulation.

Chapter 59: PHP Security — Complete Guide
XSS prevention: htmlspecialchars(), Content-Security-Policy header.
SQL Injection: always use prepared statements. Never use real_escape_string as sole protection.
CSRF: tokens in forms. SameSite cookie attribute.
File upload security: finfo_file() for MIME type, whitelist extensions, store outside web root.
Password hashing: password_hash($pass, PASSWORD_BCRYPT), password_verify($pass, $hash), password_needs_rehash(). NEVER use md5/sha1 for passwords.
Session security: session_regenerate_id(true) after login, HttpOnly cookies, session fixation.
Input validation vs sanitization — they are different: validate = check if valid, sanitize = clean the value.
filter_var() with all FILTER_VALIDATE_* and FILTER_SANITIZE_* constants.

Chapter 60: Modern PHP — Composer and Namespaces
Composer: composer.json, composer.lock, autoloading (PSR-4), require, require-dev. namespace keyword. use statements. Fully qualified class names. PSR-1, PSR-2, PSR-4, PSR-12 standards. Autoloading without Composer (spl_autoload_register).

=== PART 11: PHP PROJECTS (Chapters 61–75) ===

Chapter 61: Project — Dynamic Blog (PHP + MySQL + Sessions)
Chapter 62: Project — User Registration and Login System
Chapter 63: Project — File Manager (upload, list, delete, rename)
Chapter 64: Project — REST API with PHP (JSON responses, routing)
Chapter 65: Project — Shopping Cart with Sessions
Chapter 66: Project — Admin Dashboard with CRUD
Chapter 67: Project — CSV Import/Export Tool
Chapter 68: Project — Email Contact Form with PHPMailer intro
Chapter 69–74: Mini Challenge Sets (60 challenges total — 10 each level × 6 categories: strings, arrays, math, file I/O, OOP, SQL)
Chapter 75: PHP Mastery Recap + Full Reference Sheet + Certificate Prep

=== REMAINING REFERENCE CHAPTERS (76–90) ===

Chapter 76: Filter Functions — Complete Reference (all FILTER_ constants)
Chapter 77: Hash Functions — hash(), hash_algos(), hash_equals(), hash_hmac()
Chapter 78: Math Functions Extended — bcmath (arbitrary precision), gmp functions
Chapter 79: Stream Functions — stream_context_create, ftp_connect, http streams
Chapter 80: Zip Functions — ZipArchive class, all methods
Chapter 81: PHP Error Constants and error_reporting()
Chapter 82: Exception Classes — Throwable, Error, RuntimeException, LogicException hierarchy
Chapter 83: Reflection API — ReflectionClass, ReflectionMethod, ReflectionProperty
Chapter 84: SPL Data Structures — Complete Reference
Chapter 85: PHP CLI — Running PHP from command line, $argv, $argc, STDIN/STDOUT/STDERR
Chapter 86: PHP and HTTP Headers — Complete Reference
Chapter 87: PHP Type System — Union Types, Intersection Types, never, mixed (PHP 8)
Chapter 88: PHP 8 New Features Summary (named args, match, nullsafe, fibers, enums)
Chapter 89: PHP Interview Questions and Patterns
Chapter 90: PHP Mastery Certificate Prep — 50 Question Mock Exam

---

## QUALITY REQUIREMENTS

- Zero placeholder content in any chapter
- Every PHP built-in function from the official reference: https://www.w3schools.com/php/php_ref_overview.asp must be covered — Array, String, Math, Date, Calendar, Directory, Error, Exception, Filesystem, Filter, FTP, JSON, Mail, Misc, MySQLi, Network, Output Control, Regex, SimpleXML, Stream, Var Handling, XML Parser, Zip
- PhpFunctionRef component used for EVERY built-in function
- HTML Preview tab in compiler — renders PHP HTML output as actual HTML
- All code: valid PHP 8.2 syntax
- Every quiz: 8+ questions including at least 1 "spot the bug" (common PHP gotcha)
- Every chapter: 3 exercises (easy/medium/hard) with hints and solutions
- Certificate issues after all 90 chapters + all quizzes ≥80%
- Track color: #8892BF (PHP elephant blue)
- Track icon: PHP elephant SVG (🐘)
