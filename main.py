def on_button_pressed_a():
    igrac.turn(Direction.LEFT, 90)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    igrac.move(1)
    music.play_tone(330, music.beat(BeatFraction.SIXTEENTH))
    if igrac.is_touching(zid1):
        igrac.move(-1)
    if igrac.is_touching(zid2):
        igrac.move(-1)
    if igrac.is_touching(zid3):
        igrac.move(-1)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    igrac.turn(Direction.RIGHT, 90)
input.on_button_pressed(Button.B, on_button_pressed_b)

zid3: game.LedSprite = None
zid2: game.LedSprite = None
zid1: game.LedSprite = None
igrac: game.LedSprite = None
SMRT = images.create_image("""
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    """)
los_si = images.create_big_image("""
    # # # # # # # # # #
    # . # # . . . # . #
    # . # # . # . # . #
    # . . # . . . # . .
    # # # # # # # # # #
    """)
game2 = 1
music.start_melody(music.built_in_melody(Melodies.ENTERTAINER),
    MelodyOptions.ONCE)
igrac = game.create_sprite(2, 5)
los_lik = game.create_sprite(0, 0)
peceno_meso = game.create_sprite(randint(0, 5), randint(0, 5))
zid1 = game.create_sprite(1, 2)
zid2 = game.create_sprite(2, 2)
zid3 = game.create_sprite(3, 2)

def on_forever():
    if igrac.is_touching(peceno_meso):
        game.add_score(1)
        music.start_melody(music.built_in_melody(Melodies.POWER_UP), MelodyOptions.ONCE)
        peceno_meso.set(LedSpriteProperty.Y, randint(0, 5))
        peceno_meso.set(LedSpriteProperty.X, randint(0, 5))
    if peceno_meso.is_touching(zid1) or (peceno_meso.is_touching(zid2) or peceno_meso.is_touching(zid3)):
        peceno_meso.set(LedSpriteProperty.Y, randint(0, 5))
        peceno_meso.set(LedSpriteProperty.X, randint(0, 5))
basic.forever(on_forever)

def on_forever2():
    if igrac.is_touching(los_lik):
        music.start_melody(music.built_in_melody(Melodies.CHASE), MelodyOptions.ONCE)
        igrac.delete()
        los_lik.delete()
        peceno_meso.delete()
        zid1.delete()
        zid2.delete()
        zid3.delete()
        SMRT.show_image(0)
        SMRT.show_image(0)
        SMRT.show_image(0)
        for index in range(4):
            los_si.scroll_image(1, 100)
        game.game_over()
basic.forever(on_forever2)

def on_forever3():
    if los_lik.get(LedSpriteProperty.X) < igrac.get(LedSpriteProperty.X):
        if los_lik.get(LedSpriteProperty.X) != zid1.get(LedSpriteProperty.X) - 1 or los_lik.get(LedSpriteProperty.Y) != zid1.get(LedSpriteProperty.Y):
            if los_lik.get(LedSpriteProperty.X) != zid2.get(LedSpriteProperty.X) - 1 or los_lik.get(LedSpriteProperty.Y) != zid2.get(LedSpriteProperty.Y):
                if los_lik.get(LedSpriteProperty.X) != zid3.get(LedSpriteProperty.X) - 1 or los_lik.get(LedSpriteProperty.Y) != zid3.get(LedSpriteProperty.Y):
                    los_lik.change(LedSpriteProperty.X, 1)
                    basic.pause(2000)
                else:
                    if los_lik.get(LedSpriteProperty.Y) < igrac.get(LedSpriteProperty.Y):
                        los_lik.change(LedSpriteProperty.Y, 1)
                        basic.pause(2000)
                    elif los_lik.get(LedSpriteProperty.Y) > igrac.get(LedSpriteProperty.Y):
                        los_lik.change(LedSpriteProperty.Y, -1)
                        basic.pause(2000)
                    else:
                        los_lik.change(LedSpriteProperty.Y, randint(-1, 1))
                        basic.pause(2000)
            else:
                if los_lik.get(LedSpriteProperty.Y) < igrac.get(LedSpriteProperty.Y):
                    los_lik.change(LedSpriteProperty.Y, 1)
                    basic.pause(2000)
                elif los_lik.get(LedSpriteProperty.Y) > igrac.get(LedSpriteProperty.Y):
                    los_lik.change(LedSpriteProperty.Y, -1)
                    basic.pause(2000)
                else:
                    los_lik.change(LedSpriteProperty.Y, randint(-1, 1))
                    basic.pause(2000)
        else:
            if los_lik.get(LedSpriteProperty.Y) < igrac.get(LedSpriteProperty.Y):
                los_lik.change(LedSpriteProperty.Y, 1)
                basic.pause(2000)
            elif los_lik.get(LedSpriteProperty.Y) > igrac.get(LedSpriteProperty.Y):
                los_lik.change(LedSpriteProperty.Y, -1)
                basic.pause(2000)
            else:
                los_lik.change(LedSpriteProperty.Y, randint(-1, 1))
                basic.pause(2000)
    elif los_lik.get(LedSpriteProperty.X) > igrac.get(LedSpriteProperty.X):
        if los_lik.get(LedSpriteProperty.X) != zid1.get(LedSpriteProperty.X) + 1 or los_lik.get(LedSpriteProperty.Y) != zid1.get(LedSpriteProperty.Y):
            if los_lik.get(LedSpriteProperty.X) != zid2.get(LedSpriteProperty.X) + 1 or los_lik.get(LedSpriteProperty.Y) != zid2.get(LedSpriteProperty.Y):
                if los_lik.get(LedSpriteProperty.X) != zid3.get(LedSpriteProperty.X) + 1 or los_lik.get(LedSpriteProperty.Y) != zid3.get(LedSpriteProperty.Y):
                    los_lik.change(LedSpriteProperty.X, -1)
                    basic.pause(2000)
                else:
                    if los_lik.get(LedSpriteProperty.Y) < igrac.get(LedSpriteProperty.Y):
                        los_lik.change(LedSpriteProperty.Y, 1)
                        basic.pause(2000)
                    elif los_lik.get(LedSpriteProperty.Y) > igrac.get(LedSpriteProperty.Y):
                        los_lik.change(LedSpriteProperty.Y, -1)
                        basic.pause(2000)
                    else:
                        los_lik.change(LedSpriteProperty.Y, randint(-1, 1))
                        basic.pause(2000)
            else:
                if los_lik.get(LedSpriteProperty.Y) < igrac.get(LedSpriteProperty.Y):
                    los_lik.change(LedSpriteProperty.Y, 1)
                    basic.pause(2000)
                elif los_lik.get(LedSpriteProperty.Y) > igrac.get(LedSpriteProperty.Y):
                    los_lik.change(LedSpriteProperty.Y, -1)
                    basic.pause(2000)
                else:
                    los_lik.change(LedSpriteProperty.Y, randint(-1, 1))
                    basic.pause(2000)
        else:
            if los_lik.get(LedSpriteProperty.Y) < igrac.get(LedSpriteProperty.Y):
                los_lik.change(LedSpriteProperty.Y, 1)
                basic.pause(2000)
            elif los_lik.get(LedSpriteProperty.Y) > igrac.get(LedSpriteProperty.Y):
                los_lik.change(LedSpriteProperty.Y, -1)
                basic.pause(2000)
            else:
                los_lik.change(LedSpriteProperty.Y, randint(-1, 1))
                basic.pause(2000)
    elif los_lik.get(LedSpriteProperty.Y) < igrac.get(LedSpriteProperty.Y):
        if los_lik.get(LedSpriteProperty.Y) != zid1.get(LedSpriteProperty.Y) - 1 or los_lik.get(LedSpriteProperty.X) != zid1.get(LedSpriteProperty.X):
            if los_lik.get(LedSpriteProperty.Y) != zid2.get(LedSpriteProperty.Y) - 1 or los_lik.get(LedSpriteProperty.X) != zid2.get(LedSpriteProperty.X):
                if los_lik.get(LedSpriteProperty.Y) != zid3.get(LedSpriteProperty.Y) - 1 or los_lik.get(LedSpriteProperty.X) != zid3.get(LedSpriteProperty.X):
                    los_lik.change(LedSpriteProperty.Y, 1)
                    basic.pause(2000)
                else:
                    if los_lik.get(LedSpriteProperty.X) < igrac.get(LedSpriteProperty.X):
                        los_lik.change(LedSpriteProperty.X, 1)
                        basic.pause(2000)
                    elif los_lik.get(LedSpriteProperty.X) > igrac.get(LedSpriteProperty.X):
                        los_lik.change(LedSpriteProperty.X, -1)
                        basic.pause(2000)
                    else:
                        for index2 in range(2):
                            if los_lik.is_touching_edge():
                                los_lik.change(LedSpriteProperty.Y, 1)
                                basic.pause(2000)
                            else:
                                los_lik.change(LedSpriteProperty.X, randint(-1, 1))
                                basic.pause(2000)
            else:
                if los_lik.get(LedSpriteProperty.X) < igrac.get(LedSpriteProperty.X):
                    los_lik.change(LedSpriteProperty.X, 1)
                    basic.pause(2000)
                elif los_lik.get(LedSpriteProperty.X) > igrac.get(LedSpriteProperty.X):
                    los_lik.change(LedSpriteProperty.X, -1)
                    basic.pause(2000)
                else:
                    for index3 in range(2):
                        if los_lik.is_touching_edge():
                            los_lik.change(LedSpriteProperty.Y, 1)
                            basic.pause(2000)
                        else:
                            los_lik.change(LedSpriteProperty.X, randint(-1, 1))
                            basic.pause(2000)
        else:
            if los_lik.get(LedSpriteProperty.X) < igrac.get(LedSpriteProperty.X):
                los_lik.change(LedSpriteProperty.X, 1)
                basic.pause(2000)
            elif los_lik.get(LedSpriteProperty.X) > igrac.get(LedSpriteProperty.X):
                los_lik.change(LedSpriteProperty.X, -1)
                basic.pause(2000)
            else:
                for index4 in range(2):
                    if los_lik.is_touching_edge():
                        los_lik.change(LedSpriteProperty.Y, 1)
                        basic.pause(2000)
                    else:
                        los_lik.change(LedSpriteProperty.X, randint(-1, 1))
                        basic.pause(2000)
    elif los_lik.get(LedSpriteProperty.Y) > igrac.get(LedSpriteProperty.Y):
        if los_lik.get(LedSpriteProperty.Y) != zid1.get(LedSpriteProperty.Y) + 1 or los_lik.get(LedSpriteProperty.X) != zid1.get(LedSpriteProperty.X):
            if los_lik.get(LedSpriteProperty.Y) != zid2.get(LedSpriteProperty.Y) + 1 or los_lik.get(LedSpriteProperty.X) != zid2.get(LedSpriteProperty.X):
                if los_lik.get(LedSpriteProperty.Y) != zid3.get(LedSpriteProperty.Y) + 1 or los_lik.get(LedSpriteProperty.X) != zid3.get(LedSpriteProperty.X):
                    los_lik.change(LedSpriteProperty.Y, -1)
                    basic.pause(2000)
                else:
                    if los_lik.get(LedSpriteProperty.X) < igrac.get(LedSpriteProperty.X):
                        los_lik.change(LedSpriteProperty.X, 1)
                        basic.pause(2000)
                    elif los_lik.get(LedSpriteProperty.X) > igrac.get(LedSpriteProperty.X):
                        los_lik.change(LedSpriteProperty.X, -1)
                        basic.pause(2000)
                    else:
                        for index5 in range(2):
                            if los_lik.is_touching_edge():
                                los_lik.change(LedSpriteProperty.Y, -1)
                                basic.pause(2000)
                            else:
                                los_lik.change(LedSpriteProperty.X, randint(-1, 1))
                                basic.pause(2000)
            else:
                if los_lik.get(LedSpriteProperty.X) < igrac.get(LedSpriteProperty.X):
                    los_lik.change(LedSpriteProperty.X, 1)
                    basic.pause(2000)
                elif los_lik.get(LedSpriteProperty.X) > igrac.get(LedSpriteProperty.X):
                    los_lik.change(LedSpriteProperty.X, -1)
                    basic.pause(2000)
                else:
                    for index6 in range(2):
                        if los_lik.is_touching_edge():
                            los_lik.change(LedSpriteProperty.Y, -1)
                            basic.pause(2000)
                        else:
                            los_lik.change(LedSpriteProperty.X, randint(-1, 1))
                            basic.pause(2000)
        else:
            if los_lik.get(LedSpriteProperty.X) < igrac.get(LedSpriteProperty.X):
                los_lik.change(LedSpriteProperty.X, 1)
                basic.pause(2000)
            elif los_lik.get(LedSpriteProperty.X) > igrac.get(LedSpriteProperty.X):
                los_lik.change(LedSpriteProperty.X, -1)
                basic.pause(2000)
            else:
                for index7 in range(2):
                    if los_lik.is_touching_edge():
                        los_lik.change(LedSpriteProperty.Y, -1)
                        basic.pause(2000)
                    else:
                        los_lik.change(LedSpriteProperty.X, randint(-1, 1))
                        basic.pause(2000)
basic.forever(on_forever3)

def on_forever4():
    basic.pause(2000)
    music.play_tone(131, music.beat(BeatFraction.SIXTEENTH))
basic.forever(on_forever4)
