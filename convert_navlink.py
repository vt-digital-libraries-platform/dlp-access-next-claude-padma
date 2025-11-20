#!/usr/bin/env python3
import re
import sys

def convert_navlink_to_next_link(content):
    """Convert React Router NavLink to Next.js Link"""
    
    # Pattern 1: <NavLink className="..." to="...">
    # Convert to: <Link href="..."><a className="...">
    pattern1 = r'<NavLink\s+className="([^"]+)"\s+to="([^"]+)"([^>]*)>'
    replacement1 = r'<Link href="\2"><a className="\1"\3>'
    content = re.sub(pattern1, replacement1, content)
    
    # Pattern 2: <NavLink to="..." className="...">
    pattern2 = r'<NavLink\s+to="([^"]+)"\s+className="([^"]+)"([^>]*)>'
    replacement2 = r'<Link href="\1"><a className="\2"\3>'
    content = re.sub(pattern2, replacement2, content)
    
    # Pattern 3: <NavLink with other attributes (onClick, tabIndex, etc.)
    # This catches more complex cases
    pattern3 = r'<NavLink\s+([^>]*)\s+to="([^"]+)"([^>]*)>'
    def replace_complex(match):
        attrs_before = match.group(1)
        url = match.group(2)
        attrs_after = match.group(3)
        # Remove 'to' attribute from attrs and combine
        all_attrs = attrs_before + attrs_after
        return f'<Link href="{url}"><a {all_attrs}>'
    content = re.sub(pattern3, replace_complex, content)
    
    # Replace closing tags
    content = content.replace('</NavLink>', '</a></Link>')
    
    return content

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print("Usage: convert_navlink.py <file>")
        sys.exit(1)
    
    filename = sys.argv[1]
    
    with open(filename, 'r') as f:
        content = f.read()
    
    converted = convert_navlink_to_next_link(content)
    
    with open(filename, 'w') as f:
        f.write(converted)
    
    print(f"Converted {filename}")
