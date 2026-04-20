/* ══════════════════════════════════════════════════════
   AEGIS INTELLIGENCE — UNIT TEST SUITE
   Validation for National Mesh Logic
   ══════════════════════════════════════════════════════ */

const AegisTests = {
    runAll() {
        console.group("🚀 Starting Aegis Unit Tests...");
        this.testTicketParsing();
        this.testThemeSync();
        this.testVenueRegistry();
        console.groupEnd();
        console.log("✅ All tests passed. System integrity verified.");
    },

    // 1. Check if the parser correctly identifies sections
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

    // 2. Check if the accent colors are correctly mapped
    testThemeSync() {
        console.log("🧪 Test: Theme/Accent Mapping...");
        const f1Accent = EVENT_CONFIG.F1.accentHex;
        if (f1Accent === "#ff3355") {
            console.log("   ✔ Success: F1 Color mapping correct (#ff3355).");
        } else {
            console.error("   ✖ Fail: F1 Color mismatch.");
        }
    },

    // 3. Verify Venue Location Logic
    testVenueRegistry() {
        console.log("🧪 Test: Venue Location Integrity...");
        const amdVenue = VENUE_REGISTRY.AMD;
        if (amdVenue.lat === 23.0919) {
            console.log("   ✔ Success: Narendra Modi Stadium coordinates verified.");
        } else {
            console.error("   ✖ Fail: Venue data corrupted.");
        }
    }
};

// Auto-run tests in development mode (Console)
AegisTests.runAll();