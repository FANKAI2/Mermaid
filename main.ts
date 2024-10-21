namespace SpriteKind {
    export const LowNotes = SpriteKind.create()
    export const MiddleNotes = SpriteKind.create()
    export const HighNotes = SpriteKind.create()
}
info.onCountdownEnd(function () {
    music.stopAllSounds()
    music.play(music.createSong(hex`003c000408020106001c00010a006400f40164000004000000000000000000000000000000000234000000080002061108001000010610001800020812180020000108200028000206112800300001063000380002080f380040000108`), music.PlaybackMode.LoopingInBackground)
    music.play(music.createSong(hex`003c000408040100001c00010a006400f401640000040000000000000000000000000005000004720000000800011408000c0001140c001000011110001800010f18002000010c20002800011128003000010d30003400011134003800011438004000010c40004800010d48005000011150005800010f58006000010d60006400010c64006800011168007000010f70007800010d78008000010c`), music.PlaybackMode.LoopingInBackground)
    music.play(music.createSong(hex`003c000408040103001c0001dc00690000045e0100040000000000000000000005640001040003600000000800012508001000012c10001c00012720002800012528003000012930003c00012440004800012548005000012c500054000129540058000127580060000125600068000125680070000129700074000127740078000125780080000124`), music.PlaybackMode.LoopingInBackground)
    music.play(music.createSong(hex`003c000408020109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8003e00000008000102080009000108100011000202051800190001071c001d000102200021000102280029000108300031000202053800390001073c003d000102`), music.PlaybackMode.LoopingInBackground)
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.HighNotes, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 200)
    info.changeScoreBy(1)
    music.stopAllSounds()
    music.play(music.createSong(hex`003c000408040103001c0001dc00690000045e0100040000000000000000000005640001040003600000000800012508001000012c10001c00012720002800012528003000012930003c00012440004800012548005000012c500054000129540058000127580060000125600068000125680070000129700074000127740078000125780080000124`), music.PlaybackMode.LoopingInBackground)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.LowNotes, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 200)
    info.changeScoreBy(1)
    music.stopAllSounds()
    music.play(music.createSong(hex`003c000408020106001c00010a006400f40164000004000000000000000000000000000000000234000000080002061108001000010610001800020812180020000108200028000206112800300001063000380002080f380040000108`), music.PlaybackMode.LoopingInBackground)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.MiddleNotes, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 200)
    info.changeScoreBy(1)
    music.stopAllSounds()
    music.play(music.createSong(hex`003c000408040100001c00010a006400f401640000040000000000000000000000000005000004720000000800011408000c0001140c001000011110001800010f18002000010c20002800011128003000010d30003400011134003800011438004000010c40004800010d48005000011150005800010f58006000010d60006400010c64006800011168007000010f70007800010d78008000010c`), music.PlaybackMode.LoopingInBackground)
})
info.onScore(3, function () {
    info.startCountdown(8)
})
tiles.setCurrentTilemap(tilemap`level2`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . . . 
    . . . c 4 d 4 4 4 4 4 1 c . c c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
    . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
    f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
    . f 4 4 4 4 1 c 4 f 4 d f f f f 
    . . f f 4 d 4 4 f f 4 c f c . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(12, 11))
let LowNote = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . f 1 f . . . . . . . . 
    . . . . . f 1 f . . . . . . . . 
    . . . . . f 1 f . . . . . . . . 
    . . . . . f 1 f . . . . . . . . 
    . . . . . f 1 f . . . . . . . . 
    . . . . . f 1 f f f . . . . . . 
    . . . . . f f f . f f . . . . . 
    . . . . . . f . f . f . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.LowNotes)
tiles.placeOnTile(LowNote, tiles.getTileLocation(13, 11))
let MiddleNote = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . f 1 f . . . . . . . . 
    . . . . . f 1 f . . . . . . . . 
    . . . . . f 1 f . . . . . . . . 
    . . . . . f 1 f . . . . . . . . 
    . . . . . f 1 f . . . . . . . . 
    . . . . . f 1 f f f . . . . . . 
    . . . . . f f f . f f . . . . . 
    . . . . . . f . f . f . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.MiddleNotes)
tiles.placeOnTile(MiddleNote, tiles.getTileLocation(11, 11))
let HighNote = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . f 1 f . . . . . . . . 
    . . . . . f 1 f . . . . . . . . 
    . . . . . f 1 f . . . . . . . . 
    . . . . . f 1 f . . . . . . . . 
    . . . . . f 1 f . . . . . . . . 
    . . . . . f 1 f f f . . . . . . 
    . . . . . f f f . f f . . . . . 
    . . . . . . f . f . f . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.HighNotes)
tiles.placeOnTile(HighNote, tiles.getTileLocation(12, 10))
pauseUntil(() => true)
if (true) {
	
}
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
