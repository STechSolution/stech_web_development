import random


def switch_picker():
    switch_options = ['Akko CS Crystal Wine Red', 'Akko CS Snow Blue Gray', 'Akko CS Crystal Silver',
                      'Akko CS Sakura Switch', 'Akko CS Jelly White', 'Akko CS Matcha Green',
                      'Akko CS Jelly Pink', 'Akko CS Starfish', 'Akko X TTC Demon', 'Akko CS Radiant Red',
                      'Akko TTC Gold Pink', 'Akko CS Rose Red', 'Akko TTC Gold Red v3',
                      'EPOMAKER Ajazz Diced Fruit Banana', 'EPOMAKER Ajazz Diced Fruit Peach', 'EPOMAKER Ajazz Blueberry']
    switch_winner = random.choice(switch_options)
    print(len(switch_options))
    print(f'The Total for all switch options would be: ${len(switch_options) * 20}')
    return switch_winner


print(switch_picker())
