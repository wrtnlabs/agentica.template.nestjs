import { Module } from "@nestjs/common";

import { BbsArticleModule } from "./controllers/bbs/BbsArticleModule";
import { ChatModule } from "./controllers/chat/ChatModule";

@Module({
  imports: [BbsArticleModule, ChatModule],
})
export class MyModule {}
