# Translation Management

This folder contains all translations for the Beyond Limits website.

## Structure

- `en.json` - English (default language)
- `hi.json` - Hindi (हिन्दी)
- `ta.json` - Tamil (தமிழ்)

## How to Add or Edit Translations

### Simple Method: Edit JSON Files Directly

1. **Edit English source**: Open `en.json` and modify the text
2. **Update other languages**: Copy the same structure to `hi.json` and `ta.json` and translate
3. **Refresh browser**: The changes appear immediately on your website

### Example

If you want to change "Contact Us" button text:

**en.json:**
```json
"hero": {
  "contactBtn": "Contact Us"
}
```

**hi.json:**
```json
"hero": {
  "contactBtn": "हमसे संपर्क करें"
}
```

**ta.json:**
```json
"hero": {
  "contactBtn": "எங்களை தொடர்பு கொள்ளுங்கள்"
}
```

## Adding New Languages

1. Create a new JSON file (e.g., `fr.json` for French)
2. Copy the structure from `en.json`
3. Translate all strings
4. Add the language to the dropdown in `index.html`:
   ```html
   <option value="fr">Français</option>
   ```
5. Update `script.js` to load the new language:
   ```javascript
   await Promise.all([
       loadTranslation('en'),
       loadTranslation('hi'),
       loadTranslation('ta'),
       loadTranslation('fr')  // Add this line
   ]);
   ```

## Translation Keys Structure

```
nav.*           - Navigation menu items
hero.*          - Hero section (homepage banner)
about.*         - About section
fees.*          - Pricing/fees section
contact.*       - Contact information section
footer.*        - Footer content
```

## Best Practices

- Keep the JSON structure identical across all language files
- Use consistent terminology throughout each language
- Don't translate technical terms (API, URL, etc.)
- Preserve special characters and formatting (•, ₹, etc.)
- Test translations on the website after editing
- Keep backup copies before making major changes

## Troubleshooting

**Translations not showing?**
- Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)
- Check browser console (F12) for JSON syntax errors
- Verify JSON is valid at https://jsonlint.com/

**Missing translations?**
- Ensure all keys from `en.json` exist in other language files
- Check console for "Missing translation for key:" warnings

