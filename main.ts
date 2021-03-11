input.onButtonPressed(Button.A, function () {
    igrac.turn(Direction.Left, 90)
})
input.onButtonPressed(Button.AB, function () {
    igrac.move(1)
    music.playTone(330, music.beat(BeatFraction.Sixteenth))
    if (igrac.isTouching(zid1)) {
        igrac.move(-1)
    }
    if (igrac.isTouching(zid2)) {
        igrac.move(-1)
    }
    if (igrac.isTouching(zid3)) {
        igrac.move(-1)
    }
})
input.onButtonPressed(Button.B, function () {
    igrac.turn(Direction.Right, 90)
})
let zid3: game.LedSprite = null
let zid2: game.LedSprite = null
let zid1: game.LedSprite = null
let igrac: game.LedSprite = null
let SMRT = images.createImage(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
let los_si = images.createBigImage(`
    # # # # # # # # # #
    # . # # . . . # . #
    # . # # . # . # . #
    # . . # . . . # . .
    # # # # # # # # # #
    `)
let game2 = 1
music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
igrac = game.createSprite(2, 5)
let los_lik = game.createSprite(0, 0)
let peceno_meso = game.createSprite(randint(0, 5), randint(0, 5))
zid1 = game.createSprite(1, 2)
zid2 = game.createSprite(2, 2)
zid3 = game.createSprite(3, 2)
basic.forever(function () {
    basic.pause(2000)
    music.playTone(131, music.beat(BeatFraction.Sixteenth))
})
basic.forever(function () {
    if (igrac.isTouching(peceno_meso)) {
        game.addScore(1)
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        peceno_meso.set(LedSpriteProperty.Y, randint(0, 5))
        peceno_meso.set(LedSpriteProperty.X, randint(0, 5))
    }
    if (peceno_meso.isTouching(zid1) || (peceno_meso.isTouching(zid2) || peceno_meso.isTouching(zid3))) {
        peceno_meso.set(LedSpriteProperty.Y, randint(0, 5))
        peceno_meso.set(LedSpriteProperty.X, randint(0, 5))
    }
})
basic.forever(function () {
    if (igrac.isTouching(los_lik)) {
        music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once)
        igrac.delete()
        los_lik.delete()
        peceno_meso.delete()
        zid1.delete()
        zid2.delete()
        zid3.delete()
        SMRT.showImage(0)
        SMRT.showImage(0)
        SMRT.showImage(0)
        for (let index = 0; index < 4; index++) {
            los_si.scrollImage(1, 100)
        }
        game.gameOver()
    }
})
basic.forever(function () {
    if (los_lik.get(LedSpriteProperty.X) < igrac.get(LedSpriteProperty.X)) {
        if (los_lik.get(LedSpriteProperty.X) != zid1.get(LedSpriteProperty.X) - 1 || los_lik.get(LedSpriteProperty.Y) != zid1.get(LedSpriteProperty.Y)) {
            if (los_lik.get(LedSpriteProperty.X) != zid2.get(LedSpriteProperty.X) - 1 || los_lik.get(LedSpriteProperty.Y) != zid2.get(LedSpriteProperty.Y)) {
                if (los_lik.get(LedSpriteProperty.X) != zid3.get(LedSpriteProperty.X) - 1 || los_lik.get(LedSpriteProperty.Y) != zid3.get(LedSpriteProperty.Y)) {
                    los_lik.change(LedSpriteProperty.X, 1)
                    basic.pause(2000)
                } else if (los_lik.get(LedSpriteProperty.Y) < igrac.get(LedSpriteProperty.Y)) {
                    los_lik.change(LedSpriteProperty.Y, 1)
                    basic.pause(2000)
                } else if (los_lik.get(LedSpriteProperty.Y) > igrac.get(LedSpriteProperty.Y)) {
                    los_lik.change(LedSpriteProperty.Y, -1)
                    basic.pause(2000)
                } else {
                    los_lik.change(LedSpriteProperty.Y, randint(-1, 1))
                    basic.pause(2000)
                }
            } else if (los_lik.get(LedSpriteProperty.Y) < igrac.get(LedSpriteProperty.Y)) {
                los_lik.change(LedSpriteProperty.Y, 1)
                basic.pause(2000)
            } else if (los_lik.get(LedSpriteProperty.Y) > igrac.get(LedSpriteProperty.Y)) {
                los_lik.change(LedSpriteProperty.Y, -1)
                basic.pause(2000)
            } else {
                los_lik.change(LedSpriteProperty.Y, randint(-1, 1))
                basic.pause(2000)
            }
        } else if (los_lik.get(LedSpriteProperty.Y) < igrac.get(LedSpriteProperty.Y)) {
            los_lik.change(LedSpriteProperty.Y, 1)
            basic.pause(2000)
        } else if (los_lik.get(LedSpriteProperty.Y) > igrac.get(LedSpriteProperty.Y)) {
            los_lik.change(LedSpriteProperty.Y, -1)
            basic.pause(2000)
        } else {
            los_lik.change(LedSpriteProperty.Y, randint(-1, 1))
            basic.pause(2000)
        }
    } else if (los_lik.get(LedSpriteProperty.X) > igrac.get(LedSpriteProperty.X)) {
        if (los_lik.get(LedSpriteProperty.X) != zid1.get(LedSpriteProperty.X) + 1 || los_lik.get(LedSpriteProperty.Y) != zid1.get(LedSpriteProperty.Y)) {
            if (los_lik.get(LedSpriteProperty.X) != zid2.get(LedSpriteProperty.X) + 1 || los_lik.get(LedSpriteProperty.Y) != zid2.get(LedSpriteProperty.Y)) {
                if (los_lik.get(LedSpriteProperty.X) != zid3.get(LedSpriteProperty.X) + 1 || los_lik.get(LedSpriteProperty.Y) != zid3.get(LedSpriteProperty.Y)) {
                    los_lik.change(LedSpriteProperty.X, -1)
                    basic.pause(2000)
                } else if (los_lik.get(LedSpriteProperty.Y) < igrac.get(LedSpriteProperty.Y)) {
                    los_lik.change(LedSpriteProperty.Y, 1)
                    basic.pause(2000)
                } else if (los_lik.get(LedSpriteProperty.Y) > igrac.get(LedSpriteProperty.Y)) {
                    los_lik.change(LedSpriteProperty.Y, -1)
                    basic.pause(2000)
                } else {
                    los_lik.change(LedSpriteProperty.Y, randint(-1, 1))
                    basic.pause(2000)
                }
            } else if (los_lik.get(LedSpriteProperty.Y) < igrac.get(LedSpriteProperty.Y)) {
                los_lik.change(LedSpriteProperty.Y, 1)
                basic.pause(2000)
            } else if (los_lik.get(LedSpriteProperty.Y) > igrac.get(LedSpriteProperty.Y)) {
                los_lik.change(LedSpriteProperty.Y, -1)
                basic.pause(2000)
            } else {
                los_lik.change(LedSpriteProperty.Y, randint(-1, 1))
                basic.pause(2000)
            }
        } else if (los_lik.get(LedSpriteProperty.Y) < igrac.get(LedSpriteProperty.Y)) {
            los_lik.change(LedSpriteProperty.Y, 1)
            basic.pause(2000)
        } else if (los_lik.get(LedSpriteProperty.Y) > igrac.get(LedSpriteProperty.Y)) {
            los_lik.change(LedSpriteProperty.Y, -1)
            basic.pause(2000)
        } else {
            los_lik.change(LedSpriteProperty.Y, randint(-1, 1))
            basic.pause(2000)
        }
    } else if (los_lik.get(LedSpriteProperty.Y) < igrac.get(LedSpriteProperty.Y)) {
        if (los_lik.get(LedSpriteProperty.Y) != zid1.get(LedSpriteProperty.Y) - 1 || los_lik.get(LedSpriteProperty.X) != zid1.get(LedSpriteProperty.X)) {
            if (los_lik.get(LedSpriteProperty.Y) != zid2.get(LedSpriteProperty.Y) - 1 || los_lik.get(LedSpriteProperty.X) != zid2.get(LedSpriteProperty.X)) {
                if (los_lik.get(LedSpriteProperty.Y) != zid3.get(LedSpriteProperty.Y) - 1 || los_lik.get(LedSpriteProperty.X) != zid3.get(LedSpriteProperty.X)) {
                    los_lik.change(LedSpriteProperty.Y, 1)
                    basic.pause(2000)
                } else if (los_lik.get(LedSpriteProperty.X) < igrac.get(LedSpriteProperty.X)) {
                    los_lik.change(LedSpriteProperty.X, 1)
                    basic.pause(2000)
                } else if (los_lik.get(LedSpriteProperty.X) > igrac.get(LedSpriteProperty.X)) {
                    los_lik.change(LedSpriteProperty.X, -1)
                    basic.pause(2000)
                } else {
                    for (let index = 0; index < 2; index++) {
                        if (los_lik.isTouchingEdge()) {
                            los_lik.change(LedSpriteProperty.Y, 1)
                            basic.pause(2000)
                        } else {
                            los_lik.change(LedSpriteProperty.X, randint(-1, 1))
                            basic.pause(2000)
                        }
                    }
                }
            } else if (los_lik.get(LedSpriteProperty.X) < igrac.get(LedSpriteProperty.X)) {
                los_lik.change(LedSpriteProperty.X, 1)
                basic.pause(2000)
            } else if (los_lik.get(LedSpriteProperty.X) > igrac.get(LedSpriteProperty.X)) {
                los_lik.change(LedSpriteProperty.X, -1)
                basic.pause(2000)
            } else {
                for (let index = 0; index < 2; index++) {
                    if (los_lik.isTouchingEdge()) {
                        los_lik.change(LedSpriteProperty.Y, 1)
                        basic.pause(2000)
                    } else {
                        los_lik.change(LedSpriteProperty.X, randint(-1, 1))
                        basic.pause(2000)
                    }
                }
            }
        } else if (los_lik.get(LedSpriteProperty.X) < igrac.get(LedSpriteProperty.X)) {
            los_lik.change(LedSpriteProperty.X, 1)
            basic.pause(2000)
        } else if (los_lik.get(LedSpriteProperty.X) > igrac.get(LedSpriteProperty.X)) {
            los_lik.change(LedSpriteProperty.X, -1)
            basic.pause(2000)
        } else {
            for (let index = 0; index < 2; index++) {
                if (los_lik.isTouchingEdge()) {
                    los_lik.change(LedSpriteProperty.Y, 1)
                    basic.pause(2000)
                } else {
                    los_lik.change(LedSpriteProperty.X, randint(-1, 1))
                    basic.pause(2000)
                }
            }
        }
    } else if (los_lik.get(LedSpriteProperty.Y) > igrac.get(LedSpriteProperty.Y)) {
        if (los_lik.get(LedSpriteProperty.Y) != zid1.get(LedSpriteProperty.Y) + 1 || los_lik.get(LedSpriteProperty.X) != zid1.get(LedSpriteProperty.X)) {
            if (los_lik.get(LedSpriteProperty.Y) != zid2.get(LedSpriteProperty.Y) + 1 || los_lik.get(LedSpriteProperty.X) != zid2.get(LedSpriteProperty.X)) {
                if (los_lik.get(LedSpriteProperty.Y) != zid3.get(LedSpriteProperty.Y) + 1 || los_lik.get(LedSpriteProperty.X) != zid3.get(LedSpriteProperty.X)) {
                    los_lik.change(LedSpriteProperty.Y, -1)
                    basic.pause(2000)
                } else if (los_lik.get(LedSpriteProperty.X) < igrac.get(LedSpriteProperty.X)) {
                    los_lik.change(LedSpriteProperty.X, 1)
                    basic.pause(2000)
                } else if (los_lik.get(LedSpriteProperty.X) > igrac.get(LedSpriteProperty.X)) {
                    los_lik.change(LedSpriteProperty.X, -1)
                    basic.pause(2000)
                } else {
                    for (let index = 0; index < 2; index++) {
                        if (los_lik.isTouchingEdge()) {
                            los_lik.change(LedSpriteProperty.Y, -1)
                            basic.pause(2000)
                        } else {
                            los_lik.change(LedSpriteProperty.X, randint(-1, 1))
                            basic.pause(2000)
                        }
                    }
                }
            } else if (los_lik.get(LedSpriteProperty.X) < igrac.get(LedSpriteProperty.X)) {
                los_lik.change(LedSpriteProperty.X, 1)
                basic.pause(2000)
            } else if (los_lik.get(LedSpriteProperty.X) > igrac.get(LedSpriteProperty.X)) {
                los_lik.change(LedSpriteProperty.X, -1)
                basic.pause(2000)
            } else {
                for (let index = 0; index < 2; index++) {
                    if (los_lik.isTouchingEdge()) {
                        los_lik.change(LedSpriteProperty.Y, -1)
                        basic.pause(2000)
                    } else {
                        los_lik.change(LedSpriteProperty.X, randint(-1, 1))
                        basic.pause(2000)
                    }
                }
            }
        } else if (los_lik.get(LedSpriteProperty.X) < igrac.get(LedSpriteProperty.X)) {
            los_lik.change(LedSpriteProperty.X, 1)
            basic.pause(2000)
        } else if (los_lik.get(LedSpriteProperty.X) > igrac.get(LedSpriteProperty.X)) {
            los_lik.change(LedSpriteProperty.X, -1)
            basic.pause(2000)
        } else {
            for (let index = 0; index < 2; index++) {
                if (los_lik.isTouchingEdge()) {
                    los_lik.change(LedSpriteProperty.Y, -1)
                    basic.pause(2000)
                } else {
                    los_lik.change(LedSpriteProperty.X, randint(-1, 1))
                    basic.pause(2000)
                }
            }
        }
    }
})
