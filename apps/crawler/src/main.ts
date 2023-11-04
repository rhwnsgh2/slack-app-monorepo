import { SlackCollectService } from './services/collect/slackCollectService';
import { AnalysisService } from './services/analysis/analysisService';
import { NewsService } from './services/news/newsService';
import { SlackDeployService } from './services/deploy/deployService';

const main = async (
  sourceChannelId: string,
  targetDate: Date,
  deployChannelId: string,
) => {
  const collectService = new SlackCollectService();

  const allThreads = await collectService.getAllThreadsInChannel(
    sourceChannelId,
    targetDate,
  );

  const analysisService = new AnalysisService();

  const impressiveData = analysisService.getMostImpressiveData(allThreads);

  const newsService = new NewsService();

  const news = newsService.createNews(impressiveData);

  const newsDeployService = new SlackDeployService();

  newsDeployService.deployToChannel(news, deployChannelId);
};
