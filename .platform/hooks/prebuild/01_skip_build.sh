#!/bin/bash
# This hook runs before the default build phase
# Since we're deploying prebuilt artifacts, we don't need EB to build anything
echo "Skipping build phase - using prebuilt .next artifacts"
exit 0
