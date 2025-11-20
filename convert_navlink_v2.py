#!/usr/bin/env python3
import re
import sys

def convert_navlink_to_next_link(content):
    """Convert React Router NavLink to Next.js Link - handles JSX expressions"""
    
    # Handle NavLink with JSX expressions in 'to' attribute: to={variable}
    # Pattern: <NavLink ...attributes... to={expression} ...more attributes...>
    pattern_jsx = r'<NavLink\s+([^>]*?)\s*to=\{([^}]+)\}([^>]*?)>'
    def replace_jsx(match):
        attrs_before = match.group(1).strip()
        to_expr = match.group(2)
        attrs_after = match.group(3).strip()
        
        # Combine all attributes except 'to'
        all_attrs = ' '.join(filter(None, [attrs_before, attrs_after]))
        
        return f'<Link href={{{to_expr}}}><a {all_attrs}>'
    
    content = re.sub(pattern_jsx, replace_jsx, content)
    
    # Handle NavLink with string 'to' attribute: to="string"
    pattern_string = r'<NavLink\s+([^>]*?)\s*to="([^"]+)"([^>]*?)>'
    def replace_string(match):
        attrs_before = match.group(1).strip()
        url = match.group(2)
        attrs_after = match.group(3).strip()
        
        all_attrs = ' '.join(filter(None, [attrs_before, attrs_after]))
        
        return f'<Link href="{url}"><a {all_attrs}>'
    
    content = re.sub(pattern_string, replace_string, content)
    
    # Replace closing tags
    content = content.replace('</NavLink>', '</a></Link>')
    
    return content

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: convert_navlink_v2.py <file>")
        sys.exit(1)
    
    filename = sys.argv[1]
    
    with open(filename, 'r') as f:
        content = f.read()
    
    converted = convert_navlink_to_next_link(content)
    
    with open(filename, 'w') as f:
        f.write(converted)
    
    print(f"Converted {filename}")
