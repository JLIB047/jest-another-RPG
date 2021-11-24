const Player = require('../lib/Player');

test('creates a player object', () => {
    const player = new Player('Jay');

    expect(player.name).toBe('Jay');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});

const Potion = require('../lib/potion');

jest.mock('../lib/Potion');

//console.log(new Potion());

test("Gets player's stats as an object", () => {
    const player = new Player('Jay');

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

test ('gets inventory from player or returns false', () => {
    const player = new Player('Jay');
    
    expect(player.getInventory()).toEqual(expect.any(Array));

    player.inventory = [];

    expect(player.getInventory()).toEqual(false);
});

test ("gets player's health value", () => {
    const player = new Player('Jay');

    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
});

test ('checks if player is alive or not', () => {
    const player = new Player('Jay');

    expect(player.isAlive()).toBeTruthy();

    player.health = 0;

    expect(player.isAlive()).toBeFalsy();
})

test ("subtracts from player's health", () => {
    const player = new Player('Jay');
    const oldHealth = player.health;

    player.reduceHealth(5);

    expect(player.health).toBe(oldHealth - 5);

    player.reduceHealth(99999);

    expect(player.health).toBe(0);
});