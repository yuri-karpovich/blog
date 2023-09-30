---
title: DataView
tags:
  - project
date: 2023-10-01
---

# DataView Example

DataView is a powerful plugin that allows you to create dynamic views of your Obsidian notes. In this example, we'll be using DataView to create a table of all notes with a specific tag.

## Requirements

Ensure DataView plugin is enabled in your Obsidian settings.

In order to use this example, make sure you have a few notes tagged with `"project"`.

## TableView

```dataview
table from "blog"
where contains(tags, "project")
sort file.name asc
```
