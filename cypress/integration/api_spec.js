//
// **** Assurity Technical Assignment  ****
//
// *** Acceptance Criteria: ***
// 1. Name = "Carbon credits"
// 2. CanRelist = true
// 3. The Promotions element with Name = "Gallery" has a Description that contains the text "2x larger image"

describe('Assurity Technical Assignment', () => {

  const api = 'https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false'

  it('Successfully returns JSON', () => {
    cy.request(api)
      .its('headers')
      .its('content-type')
      .should('include', 'application/json')
  })

  it('Successfully returns 200 response code', function () {
    cy.request(api)
      .its('status')
      .should('equal', 200)
  })

  it('Assert 1: Element "Name" is equal to "Carbon Credits"', function () {
    cy.request(api)
      .should(function (response) {
        expect(response.body).to.have.property('Name', 'Carbon credits')
      })
  })

  it('Assert 2: Element "CanRelist" is equal to "true"', function () {
    cy.request(api)
      .should(function (response) {
        expect(response.body).to.have.property('CanRelist', true)
      })
  })

  it('Assert 3: Promotions element with Name "Gallery", has a Description that contains the text "2x larger image"', function () {

    const getPromo = () => cy.request(api).its('body').its('Promotions')

    getPromo().each(function($element, index) {
      for(var key in $element) {
        if ($element.hasOwnProperty(key)) {
          if ($element[key] == 'Gallery') {
            expect($element).to.have.property('Description').contains('2x larger image')
          }
        }
      }
    })
  })
})
