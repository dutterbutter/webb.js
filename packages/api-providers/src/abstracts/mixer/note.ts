// Copyright 2022 @webb-tools/
// SPDX-License-Identifier: Apache-2.0

export interface Note {
  serialize(): string;

  // deserialize(noteStr: string): Note;
}