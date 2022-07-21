CREATE TABLE groups (
    id SERIAL PRIMARY KEY,
    uuid character varying(255) NOT NULL,
    fullname character varying(255) NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    fullname character varying(255) NOT NULL UNIQUE,
    username character varying(255) NOT NULL,
    secret_key character varying(255) NOT NULL,
    uuid character varying(255) NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE group_members (
    id SERIAL PRIMARY KEY,
    uuid character varying(255) NOT NULL,
    entity_identifier character varying(255) NOT NULL UNIQUE,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);

INSERT INTO groups (id, uuid, fullname)
VALUES (
        1,
        'da1b8eea-c87b-46f5-9042-b43c0d540f31',
        'Game designers'
    ),
    (
        2,
        '97255cc3-b522-43ee-9799-9fc5132c2caa',
        'The warriors'
    ),
    (
        3,
        '4c654407-3ed6-4d22-b779-7d1e2564b15e',
        'Happy friends'
    );

INSERT INTO users (id, fullname, username, secret_key, uuid)
VALUES (
        1,
        'James',
        'james',
        'secret_key',
        '75012ff3-02d6-43c1-a2c5-9fd1d5eaa155'
    ),
    (
        2,
        'Mary',
        'mary',
        'secret_key',
        '31c12691-c566-4598-a71e-4cf423901bb3'
    ),
    (
        3,
        'John',
        'john',
        'secret_key',
        '771d13ce-3166-408e-9cc5-04765dc6925f'
    ),
    (
        4,
        'Jennifer',
        'jennifer',
        'secret_key',
        '15a47a2f-eddc-4c3d-bb56-58945eb74231'
    ),
    (
        5,
        'Patricia',
        'patricia',
        'secret_key',
        'c5d51a37-f802-4e4e-b7ee-895c3a606981'
    ),
    (
        6,
        'Elizabeth',
        'elizabeth',
        'secret_key',
        '5072e29a-4dae-47e3-bf32-207980749cd4'
    ),
    (
        7,
        'Thomas',
        'thomas',
        'secret_key',
        'ec0fea2d-ed46-4a45-afe6-bbe963c67a57'
    ),
    (
        8,
        'Anthony',
        'anthony',
        'secret_key',
        'ce171567-207f-4b60-adcb-bfea7ce27675'
    ),
    (
        9,
        'Emily',
        'emily',
        'secret_key',
        '3a7e6763-b4ee-4d56-b3ae-58cf5b5df9f3'
    ),
    (
        10,
        'Carol',
        'carol',
        'secret_key',
        'fedb6c13-5d24-4eb4-83a9-627784e05972'
    ),
    (
        11,
        'Kevin',
        'kevin',
        'secret_key',
        'aedc22fa-3aa8-4ade-95a7-30f43461ac7e'
    ),
    (
        12,
        'Brenda',
        'brenda',
        'secret_key',
        '200dad60-d544-410b-9964-933d1b4018f0'
    ),
    (
        13,
        'Helen',
        'helen',
        'secret_key',
        '12072d77-8e80-44c3-a9a4-2a4798d8ea22'
    ),
    (
        14,
        'Samuel',
        'samuel',
        'secret_key',
        '78908408-f313-4b03-a2bc-d8de4db1255e'
    ),
    (
        15,
        'Larry',
        'larry',
        'secret_key',
        '3a7e6763-b4ee-4d56-b3ae-58cf5b5df9f3'
    ),
    (
        16,
        'Joan',
        'joan',
        'secret_key',
        '1dcf75a0-af44-4b50-8ea5-e73ecf7c90a5'
    ),
    (
        17,
        'Roger',
        'roger',
        'secret_key',
        'c8f5deb5-7b76-487d-b217-a5491137db1b'
    );

INSERT INTO group_members (id, uuid, entity_identifier)
VALUES (
        1,
        'da1b8eea-c87b-46f5-9042-b43c0d540f31',
        '75012ff3-02d6-43c1-a2c5-9fd1d5eaa155'
    ),
    (
        2,
        '97255cc3-b522-43ee-9799-9fc5132c2caa',
        '31c12691-c566-4598-a71e-4cf423901bb3'
    ),
    (
        3,
        '4c654407-3ed6-4d22-b779-7d1e2564b15e',
        '771d13ce-3166-408e-9cc5-04765dc6925f'
    ),
    (
        4,
        'da1b8eea-c87b-46f5-9042-b43c0d540f31',
        '15a47a2f-eddc-4c3d-bb56-58945eb74231'
    ),
    (
        5,
        '4c654407-3ed6-4d22-b779-7d1e2564b15e',
        '771d13ce-3166-408e-9cc5-04765dc6925f'
    ),
    (
        6,
        'da1b8eea-c87b-46f5-9042-b43c0d540f31',
        '15a47a2f-eddc-4c3d-bb56-58945eb74231'
    ),
    (
        7,
        '4c654407-3ed6-4d22-b779-7d1e2564b15e',
        '771d13ce-3166-408e-9cc5-04765dc6925f'
    ),
    (
        8,
        'da1b8eea-c87b-46f5-9042-b43c0d540f31',
        '15a47a2f-eddc-4c3d-bb56-58945eb74231'
    ),
    (
        9,
        '97255cc3-b522-43ee-9799-9fc5132c2caa',
        '771d13ce-3166-408e-9cc5-04765dc6925f'
    ),
    (
        10,
        'da1b8eea-c87b-46f5-9042-b43c0d540f31',
        '15a47a2f-eddc-4c3d-bb56-58945eb74231'
    ),
    (
        11,
        '97255cc3-b522-43ee-9799-9fc5132c2caa',
        '771d13ce-3166-408e-9cc5-04765dc6925f'
    ),
    (
        12,
        'da1b8eea-c87b-46f5-9042-b43c0d540f31',
        '15a47a2f-eddc-4c3d-bb56-58945eb74231'
    );