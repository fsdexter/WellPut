rm -R -f ./migrations &&
pipenv run init &&
psql -U gitpod -c 'DROP DATABASE example;' || true &&
psql -U gitpod -c 'CREATE DATABASE example;' &&
psql -U gitpod -c 'CREATE EXTENSION unaccent;' -d example &&
pipenv run migrate &&
pipenv run upgrade
pipenv run start

search_room


{
    
    >>>>>'filters': ['wifi', 'light ', 'estudente', 'furnishedRoom'],
    >>>>>'rating': 3,
    >>>>>'bedType': 'No Bed',
    >>>>>'city': 'valencia',
    >>>>>'money': {
        'priceMIN': 'xcvb100',
        'priceMAX': '200', 
        'depositoMIN': '300', 
        'depositoMAX': '400'
        },
    >>>>>'country': 'Spain',
    >>>>>'interests': {
        'interests': ['Vegan', 'Sociable']
        }
}
10.116.1.21 - -

<sqlalchemy.sql.elements.BinaryExpression object at 0x7fe2364551c0>, 
<sqlalchemy.sql.elements.BinaryExpression object at 0x7fe236455640>


"OPTIONS /api/search_room HTTP/1.1" 200 -
isso é o que o fetch manda:
        {
        'country': 'Spain', 
        'bedType': 'No Bed', 
        'rating': 3, 
        'city': 'valencia', 
        'filters': 
            [
                'wifi', 
                'Water', 
                'light ', 
                'gas',

                'worker', 
                'estudente', 
                
                'facingTheStreet', 
                'furnishedRoom', 
                'sharedRoom', 
                'suiteRoom'
            ], 
        'money': 
            {
                'priceMIN': '100', 
                'priceMAX': '200', 
                'depositoMIN': '300', 
                'depositoMAX': '400'
            }, 
        'interests': 
            {'interests': 
                [
                    'Dancer', 
                    'Vegan', 
                    'Sporty', 
                    'Reader', 
                    'Movies', 
                    'Gay Friendly', 
                    'Vegetarian', 
                    'Animal Lover'
                ]
            }
        }

queris = []

nome da cidade
valencia
array
['wifi', 'Water', 'light ', 'gas', 'worker', 'estudente', 'facingTheStreet', 'furnishedRoom', 'sharedRoom', 'suiteRoom']
obejeto
{'priceMIN': '100', 'priceMAX': '200', 'depositoMIN': '300', 'depositoMAX': '400'}
interessante
{'interests': ['Dancer', 'Vegan', 'Sporty', 'Reader', 'Movies', 'Gay Friendly', 'Vegetarian', 'Animal Lover']}
[<sqlalchemy.sql.elements.BinaryExpression object at 0x7f0ba868c790>, <sqlalchemy.sql.elements.BinaryExpression object at 0x7f0ba868cc40>]
[]
[]
10.116.1.21 - - [21/Sep/2021 05:59:00] "POST /api/search_room HTTP/1.1" 200 -