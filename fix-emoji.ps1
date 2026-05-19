$path = "src/lib/curriculum/emoji-curriculum.ts"
$content = [System.IO.File]::ReadAllBytes($path)
$text = [System.Text.Encoding]::UTF8.GetString($content)

# Find the unterminated string on line 782
# The string starts with: content: "### Fallback...
# The content has measureText with escaped quotes inside
# The closing " is missing after the triple backticks

# Strategy: Find the exact string end and add the missing quote
$target = "\\uFFFF`"); // typically unsupported" + [char]10 + "```"
# Wait - need to understand the actual content better

# Look for "measureText" occurrences
$idx = 0
while ($true) {
    $idx = $text.IndexOf("measureText", $idx)
    if ($idx -lt 0) { break }
    
    # Get context (80 chars)
    $end = [Math]::Min($idx + 120, $text.Length)
    $ctx = $text.Substring($idx, $end - $idx)
    
    # Look for newlines and replace for display
    $display = $ctx -replace "`n", "\n" -replace "`r", "\r"
    Write-Host "Found at $idx: $display"
    Write-Host "---"
    
    $idx = $idx + 1
}
