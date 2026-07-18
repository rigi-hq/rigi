export default {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      // Optional leading "<digits> | " prefix, then conventional header.
      headerPattern: /^(?:\d+ \| )?(\w+)(?:\(([^)]+)\))?!?: (.+)$/,
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },
};
