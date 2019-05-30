import typeConvExtends from '../src/util/typeConvExtends'

describe('util', () => {
  describe('template builder type checking', () => {
    it('check type conversion for _extends param', () => {
      let _extends = [-2219827213574532400, '-3,271,754,646,568,989,696', '5,567,828,826,582,331,392', 6741246919201009664]

      try {
        typeConvExtends(_extends)
      } catch (err) {
        expect(err).toBeUndefined()
      }
      expect(_extends).toEqual([-2219827213574532400, -3271754646568989696, 5567828826582331392, 6741246919201009664])

      _extends = 'catsanddolphins'
      try {
        typeConvExtends(_extends)
      } catch (err) {
        expect(err.message).toEqual('param: {_extends} must be an sint64 or an array of sint64. Received: catsanddolphins \n')
      }

      _extends = 2424
      try {
        _extends = typeConvExtends(_extends)
      } catch (err) {
        expect(err).toBeUndefined()
      }

      expect(_extends).toEqual([2424])

      _extends = '2,424'
      try {
        _extends = typeConvExtends(_extends)
      } catch (err) {
        expect(err).toBeUndefined()
      }

      expect(_extends).toEqual([2424])
    })
  })
})