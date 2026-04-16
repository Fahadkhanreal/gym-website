#!/bin/bash

# Quick test script for contact form API
# This will test if the API endpoint is working

echo "Testing Contact Form API..."
echo ""

curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+923001234567",
    "message": "This is a test message from API test script"
  }' \
  -w "\n\nHTTP Status: %{http_code}\n"

echo ""
echo "Check your terminal logs for 'Email sent successfully' message"
echo "Check your email: mysteriousofhorror@gmail.com (including spam folder)"
