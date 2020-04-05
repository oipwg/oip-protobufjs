import decodeDescriptor from '../src/builders/decodeDescriptor'



describe('Test builder/helper functions', () => {
  describe('descriptor', () => {
    it('decode descriptor for web', () => {
      const expected = {
        enums: {},
        fields: {
          avatar: {
            type: 'OipRef',
            id: 1,
            repeated: false,
            extend: undefined
          },
          urlLinkList: {
            type: 'OipRef',
            id: 2,
            repeated: true,
            extend: undefined
          },
          tagList: { type: 'string', id: 3, repeated: true, extend: undefined }
        }
      }
      const fileDescriptor = 'CoEBCgdwLnByb3RvEhJvaXBQcm90by50ZW1wbGF0ZXMiWgoBUBIUCgZhdmF0YXIYASABKAsyBFR4aWQSGQoLdXJsTGlua0xpc3QYAiADKAsyBFR4aWQSDwoHdGFnTGlzdBgDIAMoCRoTCgRUeGlkEgsKA3JhdxgBIAEoDGIGcHJvdG8z'
      const { webFmt } = decodeDescriptor(fileDescriptor, true)
      expect(webFmt).toEqual(expected)
    })
  })
})