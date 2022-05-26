import {ApiError} from 'next/dist/server/api-utils';
import Base from '../../../../src/base/base';
import {handlerWrapper} from '../../../../src/base/handlerWrapper';
import {JWT} from '../../../../src/oauth/cateirusso/jwt';

/**
 * Cateiru SSOのログインリンクへリダイレクトする
 *
 * @param {Base<void>} base base
 */
async function handler(base: Base<void>) {
  // refererを見たいが、 https->httpへのrefererは Referrer Policy によりブロックされる
  // ため、この機能は見送る（もしどうしても実装したい場合、ローカル環境をオレオレ証明書でhttpsにする必要がある）
  //
  // if (!base.checkReferer(config.cateiruSSOEndpoint)) {
  //   throw new ApiError(400, 'Illegal referer');
  // }

  const code = base.getQuery('code');
  if (typeof code === 'undefined') {
    throw new ApiError(400, 'code is not found');
  }
  const jwt = new JWT(code);

  const data = await jwt.parse();

  // TODO
  console.log(data);
}

export default handlerWrapper(handler);
