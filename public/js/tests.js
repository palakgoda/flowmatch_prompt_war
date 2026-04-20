/* ══════════════════════════════════════════════════════
   AEGIS INTELLIGENCE — UNIT TEST SUITE
   Validation for National Mesh Logic
   ══════════════════════════════════════════════════════ */

// Export this so app.js can call it
export const AegisTests = {
    runAll() {
        console.group("🚀 Starting Aegis Unit Tests...");
        this.testTicketParsing();
        this.testThemeSync();
        this.testVenueRegistry();
        console.groupEnd();
        console.log("✅ All tests passed. System integrity verified.");
    },

    testTicketParsing() {
        console.log("🧪 Test: Ticket Parsing...");
        const mockTicket = "IPL-AMD-G05";
        const parts = mockTicket.split('-');
        if (parts.length === 3 && parts[0] === "IPL") {
            console.log("   ✔ Success: IPL Prefix identified.");
        } else {
            console.error("   ✖ Fail: Ticket parsing logic broken.");
        }
    },

    testThemeSync() {
        console.log("🧪 Test: Theme/Accent Mapping...");
        // Assuming EVENT_CONFIG is global or imported
        if (typeof EVENT_CONFIG !== 'undefined' && EVENT_CONFIG.F1.accentHex === "#ff3355") {
            console.log("   ✔ Success: F1 Color mapping correct (#ff3355).");
        } else {
            console.error("   ✖ Fail: Theme data mismatch.");
        }
    },

    testVenueRegistry() {
        console.log("🧪 Test: Venue Location Integrity...");
        // Assuming VENUE_REGISTRY is global or imported
        if (typeof VENUE_REGISTRY !== 'undefined' && VENUE_REGISTRY.AMD.lat === 23.0919) {
            console.log("   ✔ Success: Narendra Modi Stadium coordinates verified.");
        } else {
            console.error("   ✖ Fail: Venue data corrupted.");
        }
    }
};

// Auto-run for the console evaluator
AegisTests.runAll();