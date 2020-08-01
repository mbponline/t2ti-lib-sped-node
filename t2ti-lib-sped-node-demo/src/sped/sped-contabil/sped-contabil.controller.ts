/*******************************************************************************
Title: T2Ti ERP Fenix                                                                
Description: Controller relacionado ao Sped Contabil - ECD
                                                                                
The MIT License                                                                 
                                                                                
Copyright: Copyright (C) 2020 T2Ti.COM                                          
                                                                                
Permission is hereby granted, free of charge, to any person                     
obtaining a copy of this software and associated documentation                  
files (the "Software"), to deal in the Software without                         
restriction, including without limitation the rights to use,                    
copy, modify, merge, publish, distribute, sublicense, and/or sell               
copies of the Software, and to permit persons to whom the                       
Software is furnished to do so, subject to the following                        
conditions:                                                                     
                                                                                
The above copyright notice and this permission notice shall be                  
included in all copies or substantial portions of the Software.                 
                                                                                
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,                 
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES                 
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND                        
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT                     
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,                    
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING                    
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR                   
OTHER DEALINGS IN THE SOFTWARE.                                                 
                                                                                
       The author may be contacted at:                                          
           t2ti.com@gmail.com                                                   
                                                                                
@author Albert Eije (alberteije@gmail.com)                    
@version 1.0.0
*******************************************************************************/
import { Controller, Delete, Param, Post, Put, Req, Res, Get, Header, HttpCode } from '@nestjs/common';
import { SpedContabilService } from './sped-contabil.service';
import { Response } from 'express';
import { createReadStream } from 'fs';

// @Crud({
//   model: {
//     type: SpedContabil,
//   },
//   query: {
//     join: {
//     },
//   },
// })
@Controller('sped-contabil')
export class SpedContabilController {
  constructor(public service: SpedContabilService) { }

  	// para testes chame no navegador: http://localhost:3000/sped-contabil/2020-01-01|2020-12-12|0|0

	@HttpCode(200)
	@Get(':filter')
	@Header('Content-Type', 'text/plain')
	async gerarSpedContabil(@Param('filter') filter: string, @Res() response: Response) {
  	   const arquivoGerado = await this.service.gerarSpedContabil(filter);
	   const data = createReadStream(arquivoGerado);
	   data.pipe(response);
	}

}