function inverse(InputMatrix:any) {
    var temp,
    N = InputMatrix.length,
    E :any= [];
   
    for (var i = 0; i < N; i++)
      E[i] = [];
   
	//create a matrix of identity
    for (i = 0; i < N; i++)
      for (var j = 0; j < N; j++) {
        E[i][j] = 0;
        if (i == j)
          E[i][j] = 1;
      }
   
    for (var k = 0; k < N; k++) {
      temp = InputMatrix[k][k];
   
      for (var j = 0; j < N; j++)
      {
        InputMatrix[k][j] /= temp;
        E[k][j] /= temp;
      }
   
      for (var i = k + 1; i < N; i++)
      {
        temp = InputMatrix[i][k];
   
        for (var j = 0; j < N; j++)
        {
			InputMatrix[i][j] -= InputMatrix[k][j] * temp;
          E[i][j] -= E[k][j] * temp;
        }
      }
    }
   
    for (var k = N - 1; k > 0; k--)
    {
      for (var i = k - 1; i >= 0; i--)
      {
        temp = InputMatrix[i][k];
   
        for (var j = 0; j < N; j++)
        {
			InputMatrix[i][j] -= InputMatrix[k][j] * temp;
          E[i][j] -= E[k][j] * temp;
        }
      }
    }
   
    for (var i = 0; i < N; i++)
      for (var j = 0; j < N; j++)
	  InputMatrix[i][j] = E[i][j];
    return InputMatrix;
  }

export default inverse;