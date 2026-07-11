# Nat Habit E-Commerce Storefront

This project is wrapped inside **Redux Toolkit** for global state management.

---

## Homepage Architecture

Here at root (`/`) there is `page.tsx`. Inside `page.tsx` there is `HomePage`. Now, as the home page will be at the root URL, that's why it has been set inside the main `app/page.tsx`. Inside the home page there are **5 major components**:

- **Navbar** (contains brand logo, mobile drawer menu, and interactive shopping cart icon)
- **SearchBar**
- **FeaturedProducts**
- **ProductCategories**
- **AllProducts** (where pagination is used)

### Data Fetching & Redux Caching

As I said, Redux is used so all products from the DummyJSON API are stored in that Redux store, and a custom hook called `useProducts` has been made which will be used for showing data. Inside the `useProducts` hook, the API fetch call is made to the API and the response is stored in Redux so we don't make duplicate API requests.

Inside the `useProducts` hook, **3 API type fetching** is done:
1. First by fetching the whole catalog
2. Second by ID (which checks the Redux cache first)
3. Third by product search query

---

## Homepage Components Breakdown

- **SearchBar**: The first component after `Navbar` is `SearchBar`, which contains a search input component. When a user searches, it navigates to `/search?q=...` which shows search results using the search page content using `useSearchParams` and also by using the `useProductQuery` hook.
- **FeaturedProducts**: The second component is `FeaturedProducts`, which contains an Ant Design `Carousel` used to show items in a slideshow type of system along with titles and discount badges. I also made it modular by splitting each slide into a clean `FeaturedProductSlide` subcomponent.
- **ProductCategories**: A small component used mainly to show category buttons of products along with the extra sorting dropdown added which contains products sorted by *Price: Low to High*, *Price: High to Low*, and *Highest Rated*.
- **AllProducts**: The component which is mapped and contains all data from the `useProducts` hook. It contains **3 components**:
  - `ProductsCardTop`
  - `ProductsCardBottom`
  - `ItemQuantityCartButtons`

---

## Product Detail Page (`/products/[id]`)

Whenever a user clicks on any product, it navigates to that product page using `/products/[id]`, which shows the `ProductsCardsInformation` component. This component checks the Redux cache first for instant loading and is further divided into more components which are:

- **ProductCardImageBox**
- **ProductCardOverviewBox**
- **ProductsInformation**
- **Similar Category Products** (showing filtered and similar data of products based on product category)

### Product Detail Subcomponents

- **ProductCardImageBox**: Contains the image component and styling which is on the left side.
- **ProductCardOverviewBox**: Contains the data of the product which is given on the right side like title, description, discount, etc.
- **ProductsInformation**: Box below the product image and main data. This component contains the following components:
  - `ProductInfo` — Data about the product in a structured box below.
  - `ProductDimensions` — Contains dimension tags in boxes about the product.
  - `ProductReviewsSection` — Shows customer reviews and further contains:
    - `ProductReviewsRating` (contains customer reviews)
    - `ProductReviewCustomerInfo` (customer info like name, email, and avatar)
- **Similar Category Products**: Lastly, this main product component contains one more section showing similar category products using the `useProducts` hook with a filter method having the category filtered.

---

## Folder Structure

- **`util/`**: Contains mainly the tools and reusable things like error displays, loading spinner, back button, etc.
- **`types/`**: Contains all main types, interfaces, and props of all components.
- **`ReduxSlicers/` & `store/`**: Redux store, slicers (containing cart and fetch product slicer functions), and Redux hooks.
- **`hooks/`**: Contains all custom hooks (`useProductDetails` and `useProductQuery`).

---

## Extra Things I Done (Not Mentioned in Assignment)

1. **Cart Functionality**: Added cart functionality along with the `Drawer` package from Ant Design. Users can add items to the cart, increment, and decrement items directly from product cards or inside the slide-out cart drawer.
2. **Client-Side Pagination**: Added pagination in `AllProducts` using `react-simple-pagination` which shows data in an optimized way instead of overwhelming infinite scroll.
3. **Interactive Sorting & Filtering**: Added sorting dropdown and interactive category filtering buttons for sorting items in product categories (*Price: Low to High*, *Price: High to Low*, *Highest Rated*).
4. **Similar / Recommended Products**: Added a similar/recommended products grid section at the bottom of single product pages based on matching category.
5. **Dynamic SEO & OpenGraph Tags**: Added dynamic SEO components and OpenGraph meta tags for SEO-friendly pages so each product page has its own title and description.
6. **Single-Fetch Redux Caching**: Built single-fetch Redux caching so once a product or catalog is loaded, navigating between pages loads instantly with zero extra API calls.

---

## Getting Started

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.
