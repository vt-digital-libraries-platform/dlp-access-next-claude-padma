#!/bin/bash
# Script to convert React Router components to Next.js

COMPONENTS_DIR="/home/padmadlp/test-react-padma/next-app/components"

echo "Converting React Router to Next.js Link..."

for file in "$COMPONENTS_DIR"/*.js; do
  if [ -f "$file" ]; then
    filename=$(basename "$file")
    echo "Processing: $filename"
    
    # Replace React Router imports with Next.js Link
    sed -i 's/import { NavLink } from "react-router-dom";/import Link from "next\/link";/g' "$file"
    sed -i 's/import { NavLink } from '\''react-router-dom'\'';/import Link from '\''next\/link'\'';/g' "$file"
    
    # Replace CSS imports from ../css/ to ../styles/
    sed -i 's|from "../css/|from "../styles/|g' "$file"
    sed -i 's|from '\''../css/|from '\''../styles/|g' "$file"
    
    # Replace ../../css/ to ../styles/
    sed -i 's|from "../../css/|from "../styles/|g' "$file"
    sed -i 's|from '\''../../css/|from '\''../styles/|g' "$file"
    
    # Remove CSS imports from non-_app files (Next.js restriction)
    if [ "$filename" != "_app.js" ]; then
      sed -i '/^import.*\.scss.*;$/d' "$file"
    fi
  fi
done

echo "Basic conversion complete. Now need to manually handle NavLink JSX..."
