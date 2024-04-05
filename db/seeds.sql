    INSERT INTO radlibs (adjective, noun, verb, adverb) 
    SELECT 1, ('big', 'dog', 'ran', 'quickly'),
    UNION ALL
    SELECT 2,('happy', 'cat', 'jumped', 'playfully'),
    UNION ALL
    SELECT 3,('loud', 'bird', 'sang', 'beautifully');
