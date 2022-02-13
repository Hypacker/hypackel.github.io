import React from "react";

function Footer() {
  return (
    <div className="footer">
      <footer class="py-5 bg-dark fixed-bottom">
        <div class="container">
          <p class="m-0 text-center text-white">
          &copy; Copyright {(new Date().getFullYear())} Google Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;