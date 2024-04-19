---
title: Word Definitions
description: Definitions of certain commonly used words in the applications
---

Definitions of commonly used words within the project.

## Flashcard

The meaning is what you would expect, a flashcard.

In the application, there are 2 group of users for a flashcard:

- **Creator**; (Person who created the flashcard)
- **User**; (Person using the flashcard)

> Creator can also be the user.

#### User PoV

1. The user is shown the question of the flashcard. _(Back of the flashcard)_
2. The user is shown multiple possible answers of to the question.
3. The user attempts to pick the correct answers.
4. User is displayed the correct answers, and more information about the flashcard. _(Front of the flashcard)_

> Reference Slido or Kahoot; Which participants are shown a question, and have to pick the correct answers. And once done, answers are revealed with more information.

#### Creator PoV

1. The creator chooses to create a flashcard.
2. The creator sets the title of the flashcard. _(Always visible)_
3. The creator sets the question of the flashcard.
4. The creator sets the answers of the flashcard. _(Either Single-Choice or Multi-Select)_
5. Creator Publishes the flashcard. _(Must have at least 1 correct answer, and 1 wrong answer, to be published)_

Once published, anyone can view the flashcard created by the Creator, the creator can share it via unique link to the flashcard.

> The unique link will be tied to the `uuid` of the flashcard.

-----

## Quiz

A quiz is just a collection of flashcard.

The intended use is that, flashcards can be bundled up into a list, which any user can use that list as a study material.

Creators can add any public flashcards into their own quiz, even if they don't own the flashcard.

-----

## Tags

Tags just serve as easy way to categorize quizzes and flashcards.

Anyone can create tags, and edit existing tags.

-----

## Comments

Standard commenting feature. In this application, commenting should be:

- Non-nested
- Markdown Supported
- Sorted by creation date
- Support mentioning of related users. _(Users who have commented before, or creator of the commented object)_.

Users can comment on flashcards, quizzes and tags.

> See AUR or Stack Overflow commenting features for reference.