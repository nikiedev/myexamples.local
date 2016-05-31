<?php

/**
 * Class Article
 */

class Article
{
	protected $id;
	protected $title;
	protected $content;
	
	public function Article($id, $title, $content)
	{
		$this->id = $id;
		$this->title = $title;
		$this->content = $content;
	}
	
	//  Функция для вывода статьи
	public function view()
	{
		echo "<h2>$this->title</h2><p>$this->content</p>";
	}
}

/**
 * Class NewsArticle
 */

class NewsArticle extends Article
{
	private $datetime;

	public function NewsArticle($id, $title, $content)
	{
		parent::Article($id, $title, $content);
		$this->datetime = time();
	}
    
	public function view()
	{
		echo "<h2>$this->title</h2><span style='color: red'>".
				strftime('%d.%m.%y', $this->datetime).
				" <b>Новость</b></span><p>$this->content</p>";
	}
}

/**
 * Class CrossArticle
 */

class CrossArticle extends Article
{
	private $source;

	public function CrossArticle($id, $title, $content, $source)
	{
		parent::Article($id, $title, $content);
		$this->source = $source;
	}

	public function view()
	{
		parent::view();
		echo '<p>' . $this->source . '</p>';
	}
}

/**
 * Class ArticleList
 */

class ArticleList
{
	private $art_list = [];

	public function add(Article $article)
	{
		$this->art_list[] = $article;
	}

	//  Вывод всех статей
	public function view()
	{
		foreach($this->art_list as $article)
		{
			$article->view();
			echo '<hr>';
		}
	}
}
