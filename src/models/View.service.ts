import ViewModel from "../schema/Member.model";

class ViewService {
  private readonly viewModel;
  constructor() {
    this.viewModel = ViewModel;
  }
}

export default ViewService;
