namespace SpriteKind {
    export const LowNotes = SpriteKind.create()
    export const MiddleNotes = SpriteKind.create()
    export const HighNotes = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.HighNotes, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.LowNotes, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.MiddleNotes, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 200)
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
music.play(music.createSong(hex`003c000408020106001c00010a006400f40164000004000000000000000000000000000000000239000000080002061208001000020d121000180002081418002000020f1420002800020a162800300002111630003800020a1638004000030a1116`), music.PlaybackMode.LoopingInBackground)
music.play(music.createSong(hex`003c000408020103001c0001dc00690000045e01000400000000000000000000056400010400032a0000000800012508000c00012c0c0010000129100018000127200028000125280030000129380040000127`), music.PlaybackMode.LoopingInBackground)
music.play(music.createSong(hex`003c000408020106001c00010a006400f40164000004000000000000000000000000000000000234000000080002061108001000010610001800020812180020000108200028000206112800300001063000380002080f380040000108`), music.PlaybackMode.LoopingInBackground)
pauseUntil(() => true)
if (true) {
	
}
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
