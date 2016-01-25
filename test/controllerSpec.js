// Describe out test: we are testing the SimpleController
describe('Controller: SimpleController', function(){
  beforeEach(module('basicApp'));

  var cut; // short for Controller Under Test

  beforeEach(inject(function($controller){
    cut = $controller('SimpleController');
  }));

  it('should have test data available on load', function(){
    expect(cut.testData).toEqual([
      {message: 'I love unit testing', status: true},
      {message: 'I will use this info for evil', status: false}
    ]);
  });

  it('should always return 8 when useless method is called', function(){
    expect(cut.uselessMethod()).toEqual(8);
  });
})

describe('Service: GenericService', function(){
  beforeEach(module('basicApp'));

  var sut;

  beforeEach(inject(function(GenericService){
    sut = GenericService;
  }));

  it('should return an interesting message', function(){
    expect(sut.message()).toEqual('Look at me, I\'m a service');
  });
})

describe('SimpleController Server Call', function(){
  beforeEach(module('basicApp'));

  var cut;
  var mockBackend;

  beforeEach(inject(function($controller, $httpBackend){
    mockBackend = $httpBackend;
    mockBackend.expectGET('/datRoute')
      .respond({id: 3000, name: 'Gina'});

    cut = $controller('SimpleController');
  }));

  it('should retrieve a user from the server', function(){
    expect(cut.data).toBeUndefined();

    // we simulate a server response
    mockBackend.flush();

    expect(cut.data).toEqual({id: 3000, name: 'Gina'});

  });

  afterEach(function(){
    // ensure all expects set on the backend were actually called
    mockBackend.verifyNoOutstandingExpectation();

    // ensure all requests to the server have responded
    mockBackend.verifyNoOutstandingRequest();
  });


});