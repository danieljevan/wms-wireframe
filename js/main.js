document.addEventListener('DOMContentLoaded', function() {
  const navItems = document.querySelectorAll('.nav-item');
  const mainContent = document.getElementById('mainContent');

  const sections = {
    dashboard: `
      <div class="section active" id="section-dashboard">
        <h1 class="section-title">Dashboard Overview</h1>
        <div class="widget-grid">
          <div class="kpi-card"><div class="label">Total Inventory Value</div><div class="value">$284,500</div><div class="trend up">▲ 8.2%</div></div>
          <div class="kpi-card"><div class="label">Fulfillment Rate</div><div class="value">96.4%</div><div class="trend up">▲ 2.1%</div></div>
          <div class="kpi-card"><div class="label">Pending Orders</div><div class="value">34</div><div class="trend down">▼ 5</div></div>
          <div class="kpi-card"><div class="label">Low Stock Alerts</div><div class="value">12</div><div class="trend down">⚠️ Action needed</div></div>
        </div>
      </div>
    `,
    products: `
      <div class="section active" id="section-products">
        <h1 class="section-title">Product Catalog</h1>
        <table class="data-table">
          <thead><tr><th>SKU</th><th>Name</th><th>Category</th><th>Price</th><th>Stock</th></tr></thead>
          <tbody>
            <tr><td>PRD-001</td><td>Widget A</td><td>Electronics</td><td>$12.50</td><td>340</td></tr>
            <tr><td>PRD-002</td><td>Gadget B</td><td>Tools</td><td>$45.00</td><td>120</td></tr>
            <tr><td>PRD-003</td><td>Supply C</td><td>Office</td><td>$7.20</td><td>85</td></tr>
          </tbody>
        </table>
      </div>
    `,
    warehouse: `
      <div class="section active" id="section-warehouse">
        <h1 class="section-title">Warehouse Layout</h1>
        <p style="background:white;padding:2rem;border-radius:12px;border:1px solid #e2e8f0;">
          📍 Visual zone map placeholder – will be added in future steps.
        </p>
      </div>
    `,
    inventory: `
      <div class="section active" id="section-inventory">
        <h1 class="section-title">Inventory Status</h1>
        <div class="widget-grid">
          <div class="kpi-card"><div class="label">Total SKUs</div><div class="value">1,284</div></div>
          <div class="kpi-card"><div class="label">Reserved Stock</div><div class="value">210 units</div></div>
          <div class="kpi-card"><div class="label">Quarantine</div><div class="value">6 items</div></div>
        </div>
      </div>
    `,
    purchase: `
      <div class="section active" id="section-purchase">
        <h1 class="section-title">Purchase Orders</h1>
        <table class="data-table">
          <thead><tr><th>PO #</th><th>Supplier</th><th>Status</th><th>Expected</th></tr></thead>
          <tbody><tr><td>PO-101</td><td>Acme Corp</td><td>In Transit</td><td>2026-07-15</td></tr></tbody>
        </table>
      </div>
    `,
    sales: `
      <div class="section active" id="section-sales">
        <h1 class="section-title">Sales Orders</h1>
        <table class="data-table">
          <thead><tr><th>Order #</th><th>Customer</th><th>Status</th><th>Total</th></tr></thead>
          <tbody><tr><td>SO-2001</td><td>Retail Co</td><td>Picking</td><td>$1,230</td></tr></tbody>
        </table>
      </div>
    `,
    pos: `
      <div class="section active" id="section-pos">
        <h1 class="section-title">🛒 POS Cashier</h1>
        <div style="display:flex;gap:2rem;">
          <div style="flex:2;background:white;padding:1.5rem;border-radius:12px;border:1px solid #e2e8f0;">
            <h3>Current Transaction</h3>
            <p>Scan items or search...</p>
            <input type="text" placeholder="SKU/Barcode" style="width:100%;padding:0.5rem;margin-top:0.5rem;">
            <table class="data-table" style="margin-top:1rem;">
              <thead><tr><th>Item</th><th>Qty</th><th>Price</th></tr></thead>
              <tbody><tr><td>Widget A</td><td>2</td><td>$25.00</td></tr></tbody>
            </table>
            <div style="text-align:right;font-weight:bold;margin-top:1rem;">Total: $25.00</div>
          </div>
          <div style="flex:1;background:white;padding:1.5rem;border-radius:12px;border:1px solid #e2e8f0;">
            <h3>Payment</h3>
            <button style="display:block;width:100%;margin:0.3rem 0;padding:0.5rem;">💵 Cash</button>
            <button style="display:block;width:100%;margin:0.3rem 0;padding:0.5rem;">💳 Card</button>
            <button style="display:block;width:100%;margin:0.3rem 0;padding:0.5rem;">📱 Mobile</button>
          </div>
        </div>
      </div>
    `,
    customers: `
      <div class="section active" id="section-customers">
        <h1 class="section-title">Customer Management</h1>
        <table class="data-table">
          <thead><tr><th>Name</th><th>Type</th><th>Credit Limit</th><th>Balance</th></tr></thead>
          <tbody><tr><td>Wholesale Inc</td><td>Wholesale</td><td>$10,000</td><td>$2,340</td></tr></tbody>
        </table>
      </div>
    `,
    reports: `
      <div class="section active" id="section-reports">
        <h1 class="section-title">Reports</h1>
        <p style="background:white;padding:2rem;border-radius:12px;">📊 Report builder will go here.</p>
      </div>
    `,
    settings: `
      <div class="section active" id="section-settings">
        <h1 class="section-title">Settings</h1>
        <p style="background:white;padding:2rem;border-radius:12px;">⚙️ Configuration panel placeholder.</p>
      </div>
    `
  };

  function renderSection(sectionId) {
    mainContent.innerHTML = sections[sectionId] || '';
  }

  renderSection('dashboard');
  document.querySelector('[data-section="dashboard"]').classList.add('active');

  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const section = this.dataset.section;
      navItems.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
      renderSection(section);
    });
  });
});
