# ShopWeb — React E-Commerce Web Application

A modern, responsive e-commerce demonstration application built with **React**, **Vite**, **Tailwind CSS**, **shadcn/ui**, and **Magic UI**. ShopNest allows users to browse products, filter and sort the catalog, view product details, manage a shopping cart, and complete a simulated checkout experience.

> **Demo project:** ShopWeb is a frontend learning and portfolio project. It does **not** process real payments, place real orders, or send customer information to a backend.

## Features

### Product discovery
- Browse products retrieved from the [DummyJSON Products API](https://dummyjson.com/docs/products).
- Search products by title.
- Filter by category and minimum/maximum price.
- Sort products by price (low to high or high to low).
- Navigate the catalog using pagination (12 products per page).
- Reset filters to their default values.

### Product details
- View product images, descriptions, prices, ratings, categories, and stock availability.
- Adjust product quantity with stock-aware controls.
- See the total price update as the quantity changes.
- Add selected products to the cart.

### Shopping cart
- Add products and update quantities.
- Remove individual items.
- View item subtotals and the combined cart total.
- Retain cart contents across refreshes using browser `localStorage`.
- Continue to the checkout form.

### Demo checkout
- Enter a name, email, phone number, and delivery address.
- Review cart items and the order subtotal before submitting.
- Complete a **simulated** order and view an order confirmation page.
- Return to the shop after confirmation.

### Interface and experience
- Responsive layouts built with Tailwind CSS.
- Reusable form controls, cards, badges, and buttons from shadcn/ui.
- Selected animated effects from Magic UI, such as gradient heading text and interactive elements.
- Icons from Lucide React.
- An orange-accented storefront theme.

## Tech Stack

| Technology | Purpose |
| --- | --- |
| React | Component-based user interface and state management |
| Vite | Development server and production bundling |
| JavaScript / JSX | Application logic and components |
| React Router | Client-side navigation |
| Tailwind CSS v4 | Utility-first responsive styling |
| shadcn/ui (Base UI preset) | Reusable UI components |
| Magic UI | Animations and visual effects |
| Lucide React | SVG icons |
| DummyJSON | Demo product data |
| Browser localStorage | Cart persistence |

## Application Flow

```text
Home / Product Catalog
        |
        v
   Product Details
        |
        v
    Shopping Cart
        |
        v
      Checkout
        |
        v
   Order Confirmation
```

## Project Structure

The main source files are organized approximately as follows (additional generated shadcn/ui and Magic UI components may be present):

```text
shopweb/
├── public/
│   └── images/                 # Static assets, including the hero image
├── src/
│   ├── components/
│   │   ├── ui/                  # shadcn/ui and installed Magic UI components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Product.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── ProductDetails.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   └── OrderSuccess.jsx
│   ├── App.jsx                  # Catalog, filters, sorting, and pagination
│   ├── main.jsx                 # Routes and shared cart state
│   ├── App.css
│   └── index.css                # Global styles and Tailwind import
├── components.json             # shadcn/ui configuration
├── jsconfig.json               # JavaScript import alias configuration
├── vite.config.js              # Vite, React, Tailwind, and alias setup
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm, with a Node.js version compatible with the project's installed Vite version.
- Git (optional, for cloning the repository).
- An internet connection to retrieve product data from DummyJSON.

### Installation

1. Clone the repository or download its source code:

   ```bash
   git clone <your-repository-url>
   cd shopweb
   ```

   Replace `<your-repository-url>` with the actual GitHub repository URL.

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL printed in the terminal (typically `http://localhost:5173`).

### Other npm Commands

```bash
npm run build     # Generate a production build
npm run preview   # Preview the production build locally
npm run lint      # Run the configured Oxlint checks
```

## Routes

| Route | Description |
| --- | --- |
| `/` | Home page, Hero, product catalog, filters, and pagination |
| `/products/:id` | Details for an individual product |
| `/cart` | Shopping cart and order summary |
| `/checkout` | Demo billing and delivery form |
| `/order-success` | Demo order confirmation |

## Data and State Management

### Product data

Product information is fetched from the public DummyJSON API:

```text
GET https://dummyjson.com/products
GET https://dummyjson.com/products/:id
```

The product listing is filtered and sorted in the browser. Pagination then selects the products to display on the current page.

### Cart data

The cart is managed in React state and passed to the pages that need it. Cart items are saved in `localStorage` under the key:

```text
shopweb-cart
```

This enables the cart to survive ordinary page refreshes in the same browser. It is not synchronized across devices or user accounts.

### Order confirmation

The checkout page navigates to `/order-success` and passes the customer's name and order total through React Router navigation state. This is temporary frontend state, **not a permanent order record**. Opening the confirmation URL directly or losing navigation state may show a fallback message.

## UI Customization

- **Tailwind CSS:** Adjust responsive layouts, spacing, text, backgrounds, and hover states using utility classes.
- **shadcn/ui:** Customize the generated components in `src/components/ui/` and use them throughout the application.
- **Magic UI:** Use installed animation components selectively for visual emphasis.
- **Theme:** The current storefront uses orange accents alongside neutral backgrounds.

The `@/` import alias points to `src/` and is configured in `jsconfig.json` and `vite.config.js`.

## Important Limitations

This application is intended for demonstration and learning:

- **No real payment gateway** or credit/debit card processing is implemented.
- **No backend order creation**, shipping calculation, or email confirmation is implemented.
- Product data comes from a **third-party demonstration API**, so availability and content depend on that service.
- The cart is stored only in the browser; it is not a secure server-side source of truth.
- Checkout form data is used for the demonstration flow and is not submitted to a production order service.

**Do not enter real payment details or sensitive personal information while testing.**

## Potential Future Improvements

- User authentication and account management.
- Backend API and database for products, users, and orders.
- Real payment integration with secure server-side processing.
- Server-side product search, filtering, and pagination.
- Wishlist and product reviews.
- Shipping estimates and order tracking.
- Better loading states, error handling, and empty-state messaging.
- Automated tests and accessibility improvements.
- Deployment with appropriate client-side route fallbacks.

## Troubleshooting

**A UI component import cannot be resolved**

Verify that the component has been added to the project and that the path matches the file generated in `src/components/ui/`. For example:

```bash
npx shadcn@latest add button card badge input
```

**A product list appears empty**

Check the browser console, the DummyJSON request, selected filters, and the current pagination page.

**A direct route returns a 404 after deployment**

Configure the hosting platform to serve the React application's `index.html` for client-side routes such as `/cart` and `/checkout`.

## Development Status

ShopNest is an actively developed **frontend demonstration project**. Features and visual details may continue to evolve as its React and UI implementations are refined.

---

Built with React, Tailwind CSS, shadcn/ui, and Magic UI for hands-on frontend development practice.
