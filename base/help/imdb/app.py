from flask import Flask, request, jsonify
from flask_cors import CORS # Import CORS
import requests
import logging

app = Flask(__name__)
CORS(app) # Enable CORS for all routes and origins

# Configure basic logging
logging.basicConfig(level=logging.INFO)

# Use a realistic User-Agent to avoid being blocked by IMDb
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9', # Optional: Request English page if possible
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Connection': 'keep-alive'
}

@app.route('/fetch-imdb', methods=['POST'])
def fetch_imdb_page():
    """
    Fetches the HTML content of a given IMDb URL.
    Expects a JSON payload with a 'url' key.
    """
    if not request.is_json:
        logging.warning("Request received without 'application/json' Content-Type")
        return "الطلب غير صالح: يجب أن يكون Content-Type هو application/json", 400

    data = request.get_json()
    url = data.get('url')

    if not url:
        logging.warning("Request received without 'url' key in JSON payload")
        return "الطلب غير صالح: مفتاح 'url' مفقود في بيانات JSON", 400

    logging.info(f"Received request to fetch URL: {url}")

    try:
        # Use session for potential connection pooling/cookie handling (optional but good practice)
        session = requests.Session()
        session.headers.update(HEADERS)

        response = session.get(url, timeout=15) # Increased timeout

        # Check if the request was successful
        response.raise_for_status() # Raises an HTTPError for bad responses (4xx or 5xx)

        logging.info(f"Successfully fetched URL: {url}, Status: {response.status_code}")
        # Return the raw HTML content
        return response.text

    except requests.exceptions.Timeout:
        logging.error(f"Timeout occurred while fetching URL: {url}")
        return f"فشل جلب الرابط ({url}): انتهت مهلة الطلب", 504 # Gateway Timeout
    except requests.exceptions.HTTPError as http_err:
         # Handle specific HTTP errors (like 404 Not Found, 403 Forbidden)
        logging.error(f"HTTP error occurred for URL {url}: {http_err}")
        # Send back the status code from IMDb's response
        return f"فشل جلب الرابط ({url}): خطأ HTTP {response.status_code} - {response.reason}", response.status_code
    except requests.exceptions.RequestException as e:
        # Handle other network/request related errors
        logging.error(f"Error fetching URL {url}: {e}")
        return f"فشل جلب الرابط ({url}): خطأ في الشبكة أو الطلب - {e}", 502 # Bad Gateway
    except Exception as e:
        # Catch any other unexpected errors
        logging.exception(f"An unexpected error occurred while processing URL {url}: {e}")
        return "حدث خطأ غير متوقع في الخادم", 500


if __name__ == '__main__':
    # Make sure to install Flask, Flask-CORS, and requests:
    # pip install Flask Flask-CORS requests
    print("Starting Flask server on http://127.0.0.1:2003")
    app.run(host='127.0.0.1', port=2003, debug=True) # debug=True is helpful for development