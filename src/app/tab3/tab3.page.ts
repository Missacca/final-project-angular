import { Component } from '@angular/core';
import { OpenaiService} from "../services/openai.service";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  inputText: string = '';  // 用户输入的文本
  aiResponse: string = '';  // AI的回答
  messages: { user: string, ai: string }[] = [];
  constructor(private openaiService: OpenaiService) {}
  getAIResponse() {
    if (this.inputText.trim() !== '') {
      this.openaiService.getResponseFromLM(this.inputText).subscribe(
        (response) => {
          console.log('API 返回:', response);
          // 解析API返回的响应
          this.aiResponse = response?.choices?.[0]?.message?.content || // OpenAI 格式
            response?.data?.content ||                  // 你当前的格式
            '未能获取有效的回答';
          this.messages.push({ user: this.inputText, ai: this.aiResponse });
        },
        (error) => {
          console.error('调用API出错:', error);
        }
      );
    }
  }

}
