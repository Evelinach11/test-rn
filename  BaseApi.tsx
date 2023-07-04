class BaseApi {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  get(url: string): void {
    const endpoint: string = this.baseUrl + url;
    console.log(endpoint);
  }

  post(url: string, data: any): void {
    const endpoint: string = this.baseUrl + url;
  }

  put(url: string, data: any): void {
    const endpoint: string = this.baseUrl + url;
  }

  delete(url: string): void {
    const endpoint: string = this.baseUrl + url;
  }
}

export default BaseApi;

class MyApi extends BaseApi {
  constructor(baseUrl: string) {
    super(baseUrl);
  }
  printBaseUrl(): void {
    this.get("/test");
  }
}

export { MyApi };
