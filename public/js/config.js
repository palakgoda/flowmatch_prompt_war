/* ══════════════════════════════════════════════════════
   NATIONAL MESH CONFIG — Static Data & Constants
   ══════════════════════════════════════════════════════ */

const EVENT_CONFIG = {
    IPL: {
        sport: 'Cricket', sportLabel: 'IPL · T20', persona: '🏏', topIcon: 'sports_cricket',
        accentHex: '#00ff88', accentRGB: '0,255,136',
        phases: ['Strategic Timeout', 'Power Play Active', 'Death Overs', 'Mid-innings Break', 'Batting Collapse'],
        intensityLabels: ['Peak Action in 3m', 'Settled Batting Phase', 'Wicket Cluster Brewing', 'Calm Patch — 8m'],
        windowLabels: ['MOVE NOW · 90s remaining', 'HOLD · 2m to next break', 'OPTIMAL · Gate clear', 'WAIT · High tension'],
        proofTexts: ['East Stand Kiosk — 85% IDLE · Queue: ~2 min', 'Gate Corridor — LOW DENSITY · 14 sec avg pass', 'North Food Court — 91% free · Token wait: 1m'],
        feedEvents: [
            { t: 'match', msg: 'Wicket falls — crowd erupts at Gate 4' }, { t: 'crowd', msg: 'Six hit — noise spike across East Stand' },
            { t: 'match', msg: 'DRS review — tension across entire ground' }, { t: 'crowd', msg: 'Batting change imminent — crowd shifting' },
            { t: 'security', msg: 'Last over begins — entry flow restricted' }, { t: 'crowd', msg: 'Maiden over — lull in crowd movement' },
            { t: 'match', msg: 'Strategic Timeout called — 2m30s window' }, { t: 'security', msg: 'Power Play ends — gate pressure drops' }
        ],
        recommendations: ['OPEN', 'HOLD', 'MOVE', 'WAIT'],
        reasons: ['Crowd flow nominal. Optimal movement window.', 'Wicket pressure — hold for 90 seconds.', 'Gate 3 is clearing fast. Move now.', 'High tension moment. Recommend staying seated.'],
        concessionItems: [{ emoji: '🥘', name: 'Vada Pav' }, { emoji: '🍵', name: 'Masala Chai' }, { emoji: '🍿', name: 'Popcorn' }, { emoji: '🫔', name: 'Frankie' }],
        urgencyLabel: 'BALL RUSH'
    },
    F1: {
        sport: 'Formula 1', sportLabel: 'F1 · GRAND PRIX', persona: '🏎️', topIcon: 'sports_motorsports',
        accentHex: '#ff3355', accentRGB: '255,51,85',
        phases: ['Safety Car Deployed', 'Pit Window Open', 'Fastest Lap Attempt', 'VSC Period', 'Race Restart Imminent'],
        intensityLabels: ['DRS Battle in 2m', 'Pit Window Closing', 'Calm Lap — 5m window', 'Lead Change Brewing'],
        windowLabels: ['MOVE NOW · Pit straight clear', 'HOLD · Restart in 90s', 'OPTIMAL · Sector 2 gap', 'WAIT · SC ending soon'],
        proofTexts: ['Grandstand Kiosk 7 — 79% IDLE · Token wait: 90s', 'Pit Lane Concourse — CLEAR · Flow optimal', 'North Concession — 3 of 4 counters FREE'],
        feedEvents: [
            { t: 'match', msg: 'Lead change — grandstand surge detected' }, { t: 'security', msg: 'Safety car deployed — crowd churn beginning' },
            { t: 'crowd', msg: 'Pit window opens — food court pressure drop' }, { t: 'match', msg: 'Fastest lap — crowd energy spike' },
            { t: 'crowd', msg: 'DRS zone cheer — South Stand peak' }, { t: 'security', msg: 'Race restart — all zones high density' },
            { t: 'match', msg: 'Virtual Safety Car deployed — 5m window' }, { t: 'crowd', msg: 'Pit stop drama — sector 2 crowd surge' }
        ],
        recommendations: ['OPEN', 'HOLD', 'MOVE', 'WAIT'],
        reasons: ['Pit straight clear. Ideal transition window.', 'SC period — avoid main thoroughfare now.', 'Concourse clearing. Move to Gate B.', 'Restart imminent. Stay in position.'],
        concessionItems: [{ emoji: '🍟', name: 'Fries' }, { emoji: '⚡', name: 'Energy Drink' }, { emoji: '🍕', name: 'Slice' }, { emoji: '☕', name: 'Espresso' }],
        urgencyLabel: 'FLAG RUSH'
    },
    CON: {
        sport: 'Concert', sportLabel: 'LIVE CONCERT', persona: '🎤', topIcon: 'music_note',
        accentHex: '#bf00ff', accentRGB: '191,0,255',
        phases: ['Interlude — Crowd Calm', 'Setlist Climax Building', 'Encore Sequence Active', 'Band Transition', 'Floor Surge Detected'],
        intensityLabels: ['Encore Peak in 4m', 'Solo Sequence Ongoing', 'Calm Patch — 6m', 'Pyro Build-up Detected'],
        windowLabels: ['MOVE NOW · Side Exit D clear', 'HOLD · Peak song underway', 'OPTIMAL · Merch queue empty', 'WAIT · Crowd reversing'],
        proofTexts: ['West Wing Bar — 88% IDLE · Queue: under 1 min', 'Merch Booth 3 — 0 queue · Attendant free', 'Floor Exit Corridor — LOW DENSITY'],
        feedEvents: [
            { t: 'crowd', msg: 'Encore starting — crowd pressure rising' }, { t: 'crowd', msg: 'Solo sequence — floor section surge' },
            { t: 'security', msg: 'Pyro effect — west wing crowd reaction' }, { t: 'match', msg: 'Setlist climax — general admission peak' },
            { t: 'crowd', msg: 'Interlude — low-pressure exit window open' }, { t: 'security', msg: 'Band returning — crowd flow reversing' },
            { t: 'match', msg: 'New song begins — mosh pit forms floor zone' }, { t: 'crowd', msg: 'Set break — bar queue clearing fast' }
        ],
        recommendations: ['OPEN', 'HOLD', 'MOVE', 'WAIT'],
        reasons: ['Interlude window active. Smooth exit possible.', 'Peak song underway. Hold for 2 minutes.', 'Side exit D is clear. Optimal path now.', 'Crowd returning — wait for next break.'],
        concessionItems: [{ emoji: '🍺', name: 'Beer' }, { emoji: '🧋', name: 'Cold Brew' }, { emoji: '🍿', name: 'Popcorn' }, { emoji: '🌮', name: 'Taco' }],
        urgencyLabel: 'ENCORE RUSH'
    }
};

const VENUE_REGISTRY = {
    AMD: { name: 'Narendra Modi Stadium', city: 'Ahmedabad', lat: 23.0919, lon: 72.5975, transport: 'APMC Metro', gate: 'Gate 7', altGate: 'Gate 5' },
    NAREN: { name: 'Narendra Modi Stadium', city: 'Ahmedabad', lat: 23.0919, lon: 72.5975, transport: 'APMC Metro', gate: 'Gate 7', altGate: 'Gate 5' },
    WANKH: { name: 'Wankhede Stadium', city: 'Mumbai', lat: 18.9389, lon: 72.8258, transport: 'Churchgate Station', gate: 'Gate C (North)', altGate: 'Gate A (South)' },
    BIC: { name: 'Buddh Int. Circuit', city: 'Greater Noida', lat: 28.3487, lon: 77.5386, transport: 'Shuttle Lot A', gate: 'North Ramp', altGate: 'South Gate' },
    EDEN: { name: 'Eden Gardens', city: 'Kolkata', lat: 22.5646, lon: 88.3433, transport: 'Esplanade Metro', gate: 'Gate 3', altGate: 'Gate 1' },
    BLR: { name: 'Chinnaswamy Stadium', city: 'Bengaluru', lat: 12.9794, lon: 77.5997, transport: 'Cubbon Park Metro', gate: 'Gate 1', altGate: 'Gate 4' },
    HPCA: { name: 'HPCA Stadium', city: 'Dharamshala', lat: 32.2190, lon: 76.3234, transport: 'Dharamshala Bus Stand', gate: 'South Gate', altGate: 'North Gate' },
    MCA: { name: 'MCA Stadium', city: 'Pune', lat: 18.6740, lon: 73.7073, transport: 'Shivajinagar BRT', gate: 'Gate 4 (East)', altGate: 'Gate 1 (West)' },
    DEFAULT: { name: 'Stadium', city: 'India', lat: 23.0919, lon: 72.5975, transport: 'Metro Station', gate: 'Gate 7', altGate: 'Gate 5' }
};

const TRANSPORT_CONFIG = {
    AMD: { metro: { name: 'METRO RAIL', etaSec: 360, platform: 'CLEAR', load: 75 }, ride: { etaSec: 480, cars: 12, load: 58 }, park: { name: 'PRIVATE PARKING (LOT A)', traffic: 'MODERATE', exitTimeSec: 600, load: 35 } },
    NAREN: { metro: { name: 'METRO RAIL', etaSec: 360, platform: 'CLEAR', load: 75 }, ride: { etaSec: 480, cars: 12, load: 58 }, park: { name: 'PRIVATE PARKING (LOT A)', traffic: 'MODERATE', exitTimeSec: 600, load: 35 } },
    WANKH: { metro: { name: 'LOCAL RAIL', etaSec: 480, platform: 'MODERATE', load: 68 }, ride: { etaSec: 600, cars: 8, load: 72 }, park: { name: 'PRIVATE PARKING (LOT B)', traffic: 'HIGH', exitTimeSec: 900, load: 82 } },
    BIC: { metro: { name: 'SHUTTLE BUS', etaSec: 300, platform: 'CLEAR', load: 40 }, ride: { etaSec: 420, cars: 20, load: 35 }, park: { name: 'CIRCUIT PARKING (ZONE A)', traffic: 'LOW', exitTimeSec: 480, load: 28 } },
    EDEN: { metro: { name: 'METRO RAIL', etaSec: 420, platform: 'MODERATE', load: 62 }, ride: { etaSec: 360, cars: 15, load: 55 }, park: { name: 'PRIVATE PARKING', traffic: 'MODERATE', exitTimeSec: 540, load: 60 } },
    BLR: { metro: { name: 'METRO RAIL', etaSec: 300, platform: 'CLEAR', load: 50 }, ride: { etaSec: 360, cars: 18, load: 42 }, park: { name: 'PRIVATE PARKING (LOT C)', traffic: 'LOW', exitTimeSec: 420, load: 25 } },
    HPCA: { metro: { name: 'BUS STAND', etaSec: 720, platform: 'CLEAR', load: 30 }, ride: { etaSec: 480, cars: 6, load: 25 }, park: { name: 'STADIUM PARKING', traffic: 'LOW', exitTimeSec: 360, load: 18 } },
    MCA: { metro: { name: 'BUS RAPID TRANSIT', etaSec: 540, platform: 'CLEAR', load: 45 }, ride: { etaSec: 360, cars: 15, load: 40 }, park: { name: 'PRIVATE PARKING (LOT C)', traffic: 'LOW', exitTimeSec: 480, load: 22 } },
    DEFAULT: { metro: { name: 'METRO RAIL', etaSec: 360, platform: 'CLEAR', load: 60 }, ride: { etaSec: 480, cars: 10, load: 50 }, park: { name: 'PRIVATE PARKING', traffic: 'MODERATE', exitTimeSec: 600, load: 40 } }

};

const ALERT_POOL = {
    IPL: [{ tag: 'order', msg: 'Your Masala Chai is being prepared at the kiosk.' }, { tag: 'friend', msg: 'Arjun (Row G, Seat 12) is 30m from your section.' }, { tag: 'system', msg: 'Token confirmed — ready in 4 mins.' }, { tag: 'order', msg: 'Pickup window opens in 2 mins. Head to Counter 3.' }, { tag: 'friend', msg: 'Rahul just entered same block as you.' }],
    F1: [{ tag: 'order', msg: 'Your Espresso is queued at Grandstand Kiosk 7.' }, { tag: 'friend', msg: 'Marco (Sector B, Seat 8) is 20m away.' }, { tag: 'system', msg: 'Token ready in 3 mins.' }, { tag: 'order', msg: 'Order ready. Proceed to Counter 2 now.' }, { tag: 'friend', msg: 'Julia just arrived at the pit wall viewing zone.' }],
    CON: [{ tag: 'order', msg: 'Your Cold Brew is being poured at West Wing Bar.' }, { tag: 'friend', msg: 'Priya (Floor Zone B) is 15m from your position.' }, { tag: 'system', msg: 'Token ready — skip queue · Booth 3 is free.' }, { tag: 'order', msg: 'Pickup available now. Merch Booth 3 — no queue.' }, { tag: 'friend', msg: 'Sam entering via Side Exit D — heading your way.' }]
};

const EXIT_ALERT_POOL = {
    IPL: [['{t} Gate 5 Flow', 'CRITICAL (92% Load)', 'critical'], ['{t} Gate 7', 'CLEAR VECTOR', 'clear'], ['{t} Corridor D', 'Clear Vector', 'clear'], ['{t} North Metro', 'High Availability', 'clear'], ['{t} Corridor A', 'MODERATE density', 'moderate'], ['{t} Rideshare Zone', 'Surge pricing soon', 'moderate']],
    F1: [['{t} Pit Exit', 'CRITICAL (88% Load)', 'critical'], ['{t} Gate C (North)', 'CLEAR VECTOR', 'clear'], ['{t} Main Concourse', 'MODERATE density', 'moderate'], ['{t} Shuttle Lot A', 'CLEAR', 'clear'], ['{t} Exit D', 'CLEAR VECTOR', 'clear']],
    CON: [['{t} Side Exit A', 'CRITICAL (79% Load)', 'critical'], ['{t} Exit D (West)', 'CLEAR VECTOR', 'clear'], ['{t} Merch Queue', 'All booths clear', 'clear'], ['{t} Metro Platform', 'MODERATE load', 'moderate'], ['{t} Rideshare', 'Surge pricing active', 'critical']]
};

const ZONES = ['Gate A', 'Gate B', 'Food Court', 'Main Stand', 'East Wing', 'West Wing'];
const STATUS_OPTIONS = ['CLEAR', 'MODERATE', 'BUSY'];
const STATUS_COLORS = { CLEAR: '#00ff88', MODERATE: '#ffcc00', BUSY: '#ff3355' };
const INTENSITY_LEVELS = ['LOW', 'MEDIUM', 'HIGH'];
const INTENSITY_DESCS = { LOW: 'Crowd energy calm. Ideal movement window.', MEDIUM: 'Energy building — stay aware of surroundings.', HIGH: '⚡ Peak intensity. Maximum crowd engagement.' };
const INTENSITY_COLORS_MAP = { LOW: '#00ff88', MEDIUM: '#ffcc00', HIGH: '#ff3355' };
const LOG_ICON = { match: '⚡', crowd: '👥', security: '🛡️' };
const LOG_CLASS = { match: 'log-match', crowd: 'log-crowd', security: 'log-security' };